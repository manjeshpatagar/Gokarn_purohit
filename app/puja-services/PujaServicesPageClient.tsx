"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { detailedServices } from "@/lib/data";

export function PujaServicesPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-orange-600 py-20 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-100 sm:text-sm sm:tracking-[0.28em]">{t.pujaServicesPage.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{t.pujaServicesPage.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">
            {t.pujaServicesPage.subtitle}
          </p>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow={t.pujaServicesPage.detailEyebrow}
            title={t.pujaServicesPage.detailTitle}
            subtitle={t.pujaServicesPage.detailSubtitle}
          />
          {detailedServices.map((service, index) => (
            <article
              key={service.image}
              className="grid gap-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={service.image}
                  alt={`${t.detailedServices[index].title} in Uttara Kannada`}
                  className="aspect-[4/3] h-full w-full rounded-xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">{t.detailedServices[index].title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">{t.detailedServices[index].description}</p>
                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {t.pujaServicesPage.detailBody}
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow={t.common.booking}
            title={t.pujaServicesPage.bookingTitle}
            subtitle={t.pujaServicesPage.bookingSubtitle}
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
