export function TariffBigCard({
  t,
  selected,
  onSelect,
  discount,
  isPromoActive
}: {
  t: any;
  selected: boolean;
  onSelect: () => void;
  discount: number;
  isPromoActive: boolean;
}) {
  console.log(  isPromoActive)
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "px-8 py-5",
        "relative w-full text-left rounded-[22px] transition border lg:px-28 lg:py-8",
        "bg-[#3A3F3E]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        selected ? "border-orange-400/80" : "border-white/10 hover:border-white/20",
      ].join(" ")}>
      {isPromoActive &&
      <span className="
        absolute 
        top-3
        right-16
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
        lg:top-5 lg:left-6
        lg:right-auto
      ">
        -{discount}%
      </span>}
      <span className="
        absolute
        right-3
        -translate-y-1/2
        font-mont
        font-medium
        text-[16px]
        leading-[130%]
        tracking-[0.03em]
        text-[#FDB056]
        lg:right-6
        lg:text-[22px]
      ">
        хит!
      </span>

      <div className="flex between lg:grid gap-4 grid-cols-[180px_1fr] items-center">
        <div className="flex flex-col">
          <div className="font-mont font-medium lg:ml-6 :text-[18px] leading-[120%] tracking-normal text-white lg:text-[26px]">{t.period}</div>
          {isPromoActive ?  
          <div className="flex flex-col items-end">
            <div className="font-mont pt-4 font-semibold text-[34px] leading-none text-[#FDB056] lg:text-[50px]">
              {t.price} ₽
            </div>
            <div className="font-mont text-end text-[16px] leading-[120%] text-[#919191] line-through lg:text-[24px]" >
              {t.full_price} ₽
            </div>
          </div>
          :
          <div className="font-mont pt-4 font-semibold text-[34px] leading-none text-white lg:text-[45px]" >
              {t.full_price} ₽
          </div>
          }
        </div>

        <div className="font-mont pt-3.5 text-[14px] max-w-[102px] leading-[130%] text-white lg:max-w-[328px] lg:text-[16px]">{t.text}</div>
      </div>
    </button>
  );
}