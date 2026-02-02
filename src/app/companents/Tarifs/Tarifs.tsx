"use client";
import { useTariffs } from "@/app/features/tariffs/hooks";
import { TariffsBlock } from "../TariffsBlock";

export function Tarifs() {
  const { tariffs, isLoading, error, selectedId, setSelectedId, reload } = useTariffs();

  if (isLoading) return <div className="p-4">Загрузка...</div>;

  if (error) {
    return (
      <div className="p-4">
        <div className="text-red-500">Ошибка: {error}</div>
        <button className="mt-3 underline" onClick={reload}>
          Повторить
        </button>
      </div>
    );
  }

  return (
    <TariffsBlock
      tariffs={tariffs}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
  );
}