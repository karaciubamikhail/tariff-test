
"use client";
import { useEffect, useMemo, useState } from "react";

const START_SECONDS = 15 * 60 + 59; // 15:59

export function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const id = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [secondsLeft]);

  const isUrgent = secondsLeft > 0 && secondsLeft <= 30;

  const time = useMemo(() => {
    const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const ss = String(secondsLeft % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }, [secondsLeft]);

  return (
    <p
      className={[
        "mt-1 font-mono text-2xl font-bold tracking-widest text-[32px] lg:text-[40px]",
        "text-[#FFBB00]",
        isUrgent ? "animate-pulse text-red-500" : "",
      ].join(" ")}
    >
      ✦ {time} ✦
    </p>
  );
}
