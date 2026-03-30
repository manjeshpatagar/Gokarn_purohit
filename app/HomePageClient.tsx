"use client";

import { AboutSection } from "@/components/AboutSection";
import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FeatureCards } from "@/components/FeatureCards";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { imageLibrary, trustLogos } from "@/lib/data";

export function HomePageClient() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <FeatureCards />

      <AboutSection
        title={t.home.aboutTitle}
        subtitle={t.home.aboutSubtitle}
        body={t.home.aboutBody}
        image={imageLibrary.about}
        imageAlt="Kannada Purohit Services in Uttara Kannada"
        buttonLabel={t.home.aboutButton}
        buttonHref="/about"
      />

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow={t.home.trustEyebrow}
            title={t.home.trustTitle}
            subtitle={t.home.trustSubtitle}
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-[1.5rem] border border-orange-100 bg-brand.surface px-4 py-6 text-xl font-semibold text-stone-700 shadow-md sm:px-6 sm:py-8 sm:text-2xl"
              >
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow={t.common.booking}
                title={t.home.bookingTitle}
                subtitle={t.home.bookingSubtitle}
              />
            </div>
            <BookingForm />
          </div>
        </Container>
      </section>

      <ServicesSection />

      <AboutSection
        title={t.home.shortAboutTitle}
        subtitle={t.home.shortAboutSubtitle}
        body={t.home.shortAboutBody}
        image={imageLibrary.aboutShort}
        imageAlt="Griha Pravesh Pooja in Uttara Kannada"
        reverse
      />

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow={t.common.areas}
            title={t.home.areasTitle}
            subtitle={t.home.areasSubtitle}
            align="center"
          />
          <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-stone-600 sm:text-base">
            Serving all areas of Uttara Kannada including Karwar, Kumta, Honnavar, Bhatkal, Sirsi, Ankola, Yellapur, Dandeli and Gokarna.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-orange-100 bg-brand.surface px-4 py-4 text-center text-sm font-medium text-stone-700 shadow-md sm:px-5 sm:py-5 sm:text-base"
              >
                {area}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
