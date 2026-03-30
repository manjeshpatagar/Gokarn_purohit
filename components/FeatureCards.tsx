"use client";

import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

export function FeatureCards() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.featureCards.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-brand.surface p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
