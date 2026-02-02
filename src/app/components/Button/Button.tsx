type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export function Button({ onClick, disabled }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-[20px] py-4 text-lg font-semibold",
        "w-full lg:w-75",
        "bg-orange-400 text-black transition",
        "hover:bg-orange-300",
        "animate-pulse",
        disabled ? "cursor-not-allowed opacity-60 animate-none" : "",
      ].join(" ")}
    >
      Купить
    </button>
  );
}
