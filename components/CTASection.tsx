"use client";

import { Button } from "./Button";
import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-orange-600 py-10 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-100">{t.common.contact}</p>
          <h2 className="mt-2 text-3xl font-bold">{t.cta.title}</h2>
        </div>
        <Button href="/contact" variant="secondary" className="border-white bg-white text-orange-700">
          {t.common.connect}
        </Button>
      </Container>
    </section>
  );
}
