"use client";

import { useEffect, useMemo, useState } from "react";
import { getTariffs } from "./api";
import type { Tariff } from "./types";

type UseTariffsResult = {
  tariffs: Tariff[];
  isLoading: boolean;
  error: string | null;

  selectedId: string | null;
  setSelectedId: (id: string) => void;

  selectedTariff: Tariff | null;
  reload: () => void;
};

export function useTariffs(): UseTariffsResult {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedId, setSelectedIdState] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const setSelectedId = (id: string) => setSelectedIdState(id);
  const reload = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setError(null);

    getTariffs(controller.signal)
      .then((data) => {
        setTariffs(data);
        const best = data.find((t) => t.is_best) ?? data[0];
        setSelectedIdState((prev) => prev ?? best?.id ?? null);
      })
      .catch((e: unknown) => {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Unknown error");
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [reloadKey]);

  const selectedTariff = useMemo(() => {
    if (!selectedId) return null;
    return tariffs.find((t) => t.id === selectedId) ?? null;
  }, [tariffs, selectedId]);

  return {
    tariffs,
    isLoading,
    error,
    selectedId,
    setSelectedId,
    selectedTariff,
    reload,
  };
}