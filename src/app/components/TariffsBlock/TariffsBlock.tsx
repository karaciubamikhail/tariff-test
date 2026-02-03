import { TariffBigCard } from "../TariffBigCard";
import { TariffSmallCard } from "../TariffSmallCard";
type Tariff = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};

function calcDiscount(price: number, full: number) {
  if (!full) return 0;
  return Math.round((1 - price / full) * 100);
}

type Props = {
  tariffs: Tariff[];
  selectedId: string | null;
  isPromoActive: boolean;
  onSelect: (id: string) => void;
};

export function TariffsBlock({ tariffs, selectedId, onSelect, isPromoActive }: Props) {
  const normalized = tariffs.map((t, idx) => ({
  ...t,
  uiKey: `${t.id}-${idx}`,
}));
const best = normalized.find((t) => t.is_best) ?? normalized[0];
const others = normalized.filter((t) => !t.is_best);
  
const cardBase =
  "relative text-left rounded-[22px] border transition bg-zinc-900/60 border-white/10 hover:border-white/20";

const cardSelected =
  "border-orange-400 shadow-[0_0_0_1px_rgba(251,146,60,0.65),0_0_22px_rgba(251,146,60,0.18)]";
  return (
    <div className="flex flex-col gap-2 lg:w-full lg:max-w-3xl">
      {best && (
        <TariffBigCard
          t={best}
          selected={selectedId === best.uiKey}
          onSelect={() => onSelect(best.id)}
          discount={calcDiscount(best.price, best.full_price)}
          isPromoActive = {isPromoActive }
        />
      )}

      <div className="flex flex-col gap-2 lg:flex-row lg:gap-3.5">
        {others.map((t) => (
          <TariffSmallCard
            key={t.id}
            t={t}
            selected={selectedId === t.uiKey}
            onSelect={() => onSelect(t.id)}
            discount={calcDiscount(t.price, t.full_price)}
            isPromoActive = {isPromoActive }
          />
        ))}
      </div>
    </div>
  );
}
