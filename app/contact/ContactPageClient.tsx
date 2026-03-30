"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { imageLibrary } from "@/lib/data";

export function ContactPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-orange-100 bg-brand.surface p-8 shadow-soft">
              <SectionTitle
                eyebrow={t.common.contact}
                title={t.contactPage.title}
                subtitle={t.contactPage.subtitle}
              />
              <div className="mt-8 space-y-4 text-base text-stone-700">
                <p><span className="font-semibold text-stone-900">{t.contactPage.labels.name}:</span> {t.contactDetails.name}</p>
                <p><span className="font-semibold text-stone-900">{t.contactPage.labels.email}:</span> {t.contactDetails.email}</p>
                <p><span className="font-semibold text-stone-900">{t.contactPage.labels.phone}:</span> {t.contactDetails.phone}</p>
                <p><span className="font-semibold text-stone-900">{t.contactPage.labels.address}:</span> {t.contactDetails.address}</p>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-dashed border-orange-200 bg-white p-5">
                <img
                  src={imageLibrary.contactBackground}
                  alt="Temple background for Uttara Kannada purohit service"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow={t.contactPage.formEyebrow}
                title={t.contactPage.formTitle}
                subtitle={t.contactPage.formSubtitle}
              />
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FAQ />
    </>
  );
}
