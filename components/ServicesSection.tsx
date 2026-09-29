"use client";

import { imageLibrary } from "@/lib/data";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function ServicesSection() {
  const { lang, t } = useLanguage();
  const sectionBadge = lang === "kn" ? "ಪವಿತ್ರ ಸೇವೆಗಳು" : "Sacred Services";
  const sectionBlurb =
    lang === "kn"
      ? "ಮನೆ, ದೇವಸ್ಥಾನ ಮತ್ತು ಕುಟುಂಬ ಸಮಾರಂಭಗಳಿಗೆ ಸಂಪ್ರದಾಯಬದ್ಧ ಪೂಜೆಗಳು"
      : "Traditional rituals for homes, temples, and family occasions";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f1_0%,#fff4e8_38%,#ffffff_100%)] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_58%)]" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative rounded-[2rem] border border-amber-100/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.1)] backdrop-blur-sm sm:p-8">
            <SectionTitle
              eyebrow={t.servicesSection.eyebrow}
              title={t.servicesSection.title}
              subtitle={t.servicesSection.subtitle}
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.servicesList.map((service, index) => (
                <li
                  key={service}
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] px-4 py-4 text-stone-700 shadow-[0_14px_34px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_18px_42px_rgba(120,53,15,0.14)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-300 text-sm font-bold text-white shadow-[0_10px_22px_rgba(120,53,15,0.22)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium leading-6">{service}</span>
                </li>
              ))}
            </ul>
            <Button href="/puja-services" className="mt-8">
              {t.common.allServices}
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white/70 p-3 shadow-[0_26px_80px_rgba(120,53,15,0.12)] backdrop-blur-sm">
            <div className="absolute inset-x-6 top-6 z-10 rounded-[1.25rem] border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-100">
                {sectionBadge}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {sectionBlurb}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={imageLibrary.servicesMain}
                alt={t.brand.title}
                className="aspect-[4/5] h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
