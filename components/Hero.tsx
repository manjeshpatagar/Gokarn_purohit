"use client";

import { Button } from "./Button";
import { Container } from "./Container";
import { imageLibrary } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-stone-900"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(28,25,23,0.86), rgba(154,52,18,0.72)), url('${imageLibrary.hero}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
            {t.brand.subtitle}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-orange-50 md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`tel:${t.contactDetails.phone}`}>{t.hero.callBtn}</Button>
            <Button href={`https://wa.me/${t.contactDetails.phone.replace(/[^\d]/g, "")}`} variant="secondary">
              {t.hero.whatsappBtn}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
