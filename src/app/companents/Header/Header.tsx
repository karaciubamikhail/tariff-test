import { Timer } from "./HeaderTimer";

export function Header() {
  return (
    <div className="
      sticky top-0 z-20
      bg-[#1D5B43]
      px-4 py-3
      flex flex-col items-center
      text-white
    ">
      <p className="text-sm opacity-90 text-[18px] lg:text-[24px]">
        Успейте открыть пробную неделю
      </p>

      <Timer />
    </div>
  );
}
