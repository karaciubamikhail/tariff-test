"use client";
import { useTariffs } from "@/app/features/tariffs/hooks";
import { TariffsBlock } from "../TariffsBlock";

type Props = {
  isPromoActive: boolean;
};

export function Tarifs({ isPromoActive }: Props) {
  const { tariffs, isLoading, error, selectedId, setSelectedId, reload } = useTariffs();
  console.log(tariffs)

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
      isPromoActive={isPromoActive}
    />
  );
}