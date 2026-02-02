import Image from "next/image";
export function Attention() {
  return (
    <div
      className="
        mt-4 flex items-center gap-3
        rounded-[18px] bg-[#3A3F3E]/60
        px-4 py-3
        text-[13px] leading-[1.35]
        text-zinc-200/90
        w-full lg:max-w-[499px]
      "
    >
      <Image
        src="/mark.svg"
        alt="mark"
        width={3}
        height={16}
        className="object-contain flex shrink-0 items-center justify-center rounded-full mt-[-12px] mr-1.5"
        />

      <p className="text-[12px] font-normal leading-normal">
        Следуя плану на 3 месяца и более, люди получают{" "}
        в 2 раза лучший результат, чем за 1 месяц
      </p>
    </div>
  );
}
