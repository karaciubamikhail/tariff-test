"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const START_SECONDS = 1 * 60 + 0; // 1:00

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const id = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => clearInterval(id);
  }, [secondsLeft]);

  const isPromoActive = secondsLeft > 0;

  const time = useMemo(() => {
    const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const ss = String(secondsLeft % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }, [secondsLeft]);

  return (
    <div className="bg-gray-500">
      <Header time={time} isUrgent={secondsLeft > 0 && secondsLeft <= 30} />
      <Main isPromoActive={isPromoActive} />
    </div>
  );
}
