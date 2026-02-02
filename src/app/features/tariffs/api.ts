import type { Tariff } from "./types";

export const API = "https://t-core.fit-hub.pro/Test/GetTariffs";

export async function getTariffs(signal?: AbortSignal): Promise<Tariff[]> {
  const res = await fetch(API, { signal, cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load tariffs: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as Tariff[];

  if (!Array.isArray(data)) {
    throw new Error("Tariffs API returned non-array payload");
  }

  return data;
}