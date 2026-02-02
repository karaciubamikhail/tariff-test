"use client";

export function Timer({ time, isUrgent }: { time: string; isUrgent: boolean }) {
  return (
    <p
      style={{ fontFamily: "var(--font-raleway)" }}
      className={[
        "mt-1 text-2xl font-bold tracking-widest text-[32px] lg:text-[40px]",
        "text-[#FFBB00]",
        isUrgent ? "animate-pulse text-red-500" : "",
      ].join(" ")}
    >
      ✦ {time} ✦
    </p>
  );
}
