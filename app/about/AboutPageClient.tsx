"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { imageLibrary } from "@/lib/data";

export function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-white py-16">
        <Container className="max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={imageLibrary.aboutArticle}
              alt="Experienced Kannada purohit in Uttara Kannada"
              className="aspect-[16/7] h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="mt-10">
            <SectionTitle
              eyebrow={t.common.about}
              title={t.aboutPage.title}
              subtitle={t.aboutPage.subtitle}
            />
            <div className="mt-8 space-y-6 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              <p>{t.aboutPage.intro}</p>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{t.aboutPage.section1Title}</h2>
              <p>{t.aboutPage.section1Body}</p>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{t.aboutPage.section2Title}</h2>
              <ul className="list-disc space-y-3 pl-6">
                {t.aboutPage.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{t.aboutPage.section3Title}</h2>
              <p>{t.aboutPage.section3Body}</p>
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
