export function TariffSmallCard({
  t,
  selected,
  onSelect,
  discount,
  isPromoActive,
}: {
  t: any;
  selected: boolean;
  onSelect: () => void;
  discount: number;
  isPromoActive: boolean;
}) {
  const cardBase =
    "relative overflow-hidden text-left rounded-[28px] border transition bg-[#3A3F3E]/55 border-white/10 hover:border-white/20";

  const cardSelected =
    "border-orange-400 shadow-[0_0_0_1px_rgba(251,146,60,0.65),0_0_22px_rgba(251,146,60,0.18)]";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "px-8 py-6", 
        'w-full',
        'lg:w-[240px]',
        'lg:px-4',
        cardBase,
        selected ? cardSelected : "",
      ].join(" ")}
    >
      {isPromoActive && 
      <span className="
        absolute 
        top-3
        right-7.5
        px-[6px] py-[3px]
        -translate-y-1/2
        flex items-center gap-[10px]
        rounded-b-[8px]
        bg-[#FD5656]
        font-gilroy
        text-[16px]
        font-medium
        leading-[130%]
        text-white
        whitespace-nowrap
        lg:text-[22px]
        lg:px-[8px] lg:py-[5px]
        lg:right-auto
        lg:top-5 lg:left-6
      ">
        -{discount}%
      </span>}
      <div className="flex between gap-19 lg:flex-col lg:gap-9">
          <div className="flex-col lg:flex lg:between lg:items-center">
            <div className="font-mont font-medium text-[18px] leading-[120%] text-white lg:text-[36px] lg:mt-12">
            {t.period}
          </div>
          {isPromoActive ?  
          <div>
            <div className="mt-4 font-mont font-semibold text-[34px] leading-none text-white lg:text-[50px] lg:mt-7">
            {t.price} ₽
          </div>
          <div className="font-mont text-[16px] leading-[120%] text-[#919191] line-through text-end lg:text-[24px]">
            {t.full_price} ₽
          </div>
          </div>:
          <div className="font-mont mt-4 text-[34px] leading-[120%] text-white text-end lg:text-[50px]">
            {t.full_price} ₽
          </div>
          }
        </div>
        <div className="mt-10 font-mont text-[14px] leading-[130%] max-w-[160px] text-white max-w-[111px] lg:text-[16px] lg:max-w-[275px]">
          {t.text}
        </div>
      </div>
    </button>
  );
}
