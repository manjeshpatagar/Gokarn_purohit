"use client";

import { imageLibrary } from "@/lib/data";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow={t.servicesSection.eyebrow}
              title={t.servicesSection.title}
              subtitle={t.servicesSection.subtitle}
            />
            <ul className="mt-8 space-y-4">
              {t.servicesList.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-brand.surface px-4 py-4 text-stone-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                    *
                  </span>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
            <Button href="/puja-services" className="mt-8">
              {t.common.allServices}
            </Button>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={imageLibrary.servicesMain}
              alt={t.brand.title}
              className="aspect-[4/3] h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
