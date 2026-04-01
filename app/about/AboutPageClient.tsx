"use client";

import { Button } from "@/components/Button";
import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { imageLibrary } from "@/lib/data";

export function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9f3_0%,#fff6ec_34%,#ffffff_100%)] py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_58%)]" />
        <Container className="max-w-5xl">
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white/60 p-3 shadow-[0_24px_70px_rgba(120,53,15,0.12)] backdrop-blur-sm">
              <img
                src={imageLibrary.aboutArticle}
                alt="Experienced Kannada purohit in Uttara Kannada"
                className="aspect-[4/5] h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="rounded-[2rem] border border-amber-100/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.08)] backdrop-blur-sm sm:p-8">
              <p className="inline-flex rounded-full border border-amber-200/50 bg-orange-50 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-orange-700">
                {t.common.about}
              </p>
              <h1 className="mt-5 text-3xl font-black leading-tight text-stone-900 sm:text-4xl md:text-5xl">
                {t.aboutPage.title}
              </h1>
              <p className="mt-4 text-base font-semibold leading-7 text-orange-700 sm:text-lg">
                {t.aboutPage.subtitle}
              </p>
              <p className="mt-6 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                {t.aboutPage.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-orange-800 shadow-sm">
                  Gokarna
                </span>
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-orange-800 shadow-sm">
                  Ganapati Temple
                </span>
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-orange-800 shadow-sm">
                  Mahabaleswara Temple
                </span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Address</p>
                  <p className="mt-2 text-base font-semibold text-stone-900">{t.contactDetails.address}</p>
                </div>
                <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Phone</p>
                  <a href={`tel:${t.contactDetails.phone}`} className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-stone-900 transition hover:text-orange-700">
                    <span>📞</span>
                    {t.contactDetails.phone}
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`tel:${t.contactDetails.phone}`}>📞 Call Now</Button>
                <Button href="/contact" variant="secondary">
                  Contact Details
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <SectionTitle
              eyebrow={t.common.about}
              title={t.aboutPage.section1Title}
              subtitle={t.aboutPage.section1Body}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_20px_55px_rgba(120,53,15,0.08)]">
                <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{t.aboutPage.section2Title}</h2>
                <ul className="mt-5 space-y-4">
                  {t.aboutPage.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1.25rem] bg-orange-50/70 px-4 py-4 text-sm leading-7 text-stone-700">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm text-white">
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-6 shadow-[0_20px_55px_rgba(120,53,15,0.08)]">
                <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{t.aboutPage.section3Title}</h2>
                <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {t.aboutPage.section3Body}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow={t.common.contact}
            title={t.aboutPage.bookingTitle}
            subtitle={t.aboutPage.bookingSubtitle}
            align="center"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </Container>
      </section>
    </>
  );
}
