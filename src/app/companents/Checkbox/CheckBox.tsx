"use client";
type Props = {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: boolean;
};

export function CheckBox({ checked, onChange, error }: Props) {
  return (
    <label
      className={[
        "mt-4 flex cursor-pointer items-start gap-3 rounded-xl",
        "text-sm",
        "lg:w-[575px]",
        error ? "ring-2 ring-red-500/60" :'',
      ].join(" ")}
    >

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <span
        className={[
          "flex h-[30px] w-[30px] shrink-0 items-center justify-center",
          "rounded-[8px] border-2",
          "bg-black/20",
          error ? "border-red-500" : "border-white/25",
        ].join(" ")}
      >
        {checked && (
          <svg
            width="19"
            height="13"
            viewBox="0 0 26 20"
            fill="none"
            stroke="#FDB056"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 10L10 18L24 2" />
          </svg>
        )}
      </span>

      <span className="text-[#CDCDCD] leading-snug">
        Я согласен с <a href="#" className="underline underline-offset-2">офертой рекуррентных платежей
        </a>
        {" "}и{" "}
        <a href="#" className="underline underline-offset-2">
          Политикой конфиденциальности
        </a>
      </span>
    </label>
  );
}
