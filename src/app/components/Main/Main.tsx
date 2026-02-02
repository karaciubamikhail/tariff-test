"use client";
import Image from "next/image";
import { Tarifs } from "../Tarifs";
import { Attention } from "../Attention";
import { CheckBox } from "../Checkbox";
import { Button } from "../Button";
import { Warranty } from "../Warranty";
import { useState } from "react";

export function Main({ isPromoActive }: { isPromoActive: boolean }) {
     const [agreed, setAgreed] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const onBuy = () => {
    if (!agreed) {
      setCheckboxError(true);
      return;
    }
    setCheckboxError(false);
  };
  console.log(isPromoActive)
  return (
    <section className="min-h-screen bg-[#1f2423] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <h1 className="font-mont font-bold leading-[110%] tracking-[0.01em] text-[24px] lg:text-[40px]">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>

        <div className="mt-5 grid gap-8 lg:grid-cols-[380px_1fr] items-start lg:mt-28">
          <div className="relative mx-auto h-[320px] w-full max-w-[260px] sm:h-[380px] sm:max-w-[300px] lg:mx-0 lg:h-[767px] lg:w-[380px] lg:max-w-none">
            <Image
              src="/man.png"
              alt="Fitness man"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="w-full lg:max-w-[640px]">
            <Tarifs isPromoActive={isPromoActive}/>
            <Attention />
            <CheckBox
            checked={agreed}
            error={checkboxError}
            onChange={(v) => {
              setAgreed(v);
              if (v) setCheckboxError(false);
            }}
            />
            <div className="mt-6">
              <Button onClick={onBuy} />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#9B9B9B] w-full">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>
        <Warranty />
      </div>
    </section>
  );
}
