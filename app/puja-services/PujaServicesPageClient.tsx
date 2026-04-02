"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";

const serviceCardImages = [
  "/images/popular-pitra-puja.jpg",
  "/images/popular-ashlesha-bali.jpeg",
  "/images/popular-ganapati-homam.jpg",
  "/images/pooja-griha-pravesha.jpeg",
  "/images/gallery-purohit-1.jpeg",
  "/images/pooja-vivaha.png",
  "/images/gallery-purohit-2.jpeg",
  "/images/gallery-purohit-3.jpeg",
  "/images/pooja-shraddha.jpeg",
  "/images/service-vastu.svg",
  "/images/hero-gokarna-ganapati.jpeg",
  "/images/popular-lakshmi-pooja.jpeg",
  "/images/popular-navagraha-puja.png",
];

export function PujaServicesPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#c2410c_0%,#7c2d12_52%,#431407_100%)] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.22),transparent_34%)]" />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-100 sm:text-sm sm:tracking-[0.28em]">
            {t.pujaServicesPage.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{t.pujaServicesPage.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">
            {t.pujaServicesPage.subtitle}
          </p>
        </Container>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fff7ed_0%,#fffbf7_42%,#ffffff_100%)] py-16">
        <Container className="space-y-10">
          <SectionTitle
            eyebrow={t.pujaServicesPage.detailEyebrow}
            title={t.pujaServicesPage.detailTitle}
            subtitle={t.pujaServicesPage.detailBody}
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.servicesList.map((service, index) => (
              <article
                key={service}
                className="group overflow-hidden rounded-[1.9rem] border border-orange-100 bg-white shadow-[0_20px_55px_rgba(120,53,15,0.1)] transition duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_28px_70px_rgba(120,53,15,0.16)]"
                style={{ animation: `serviceFloat 5s ease-in-out ${index * 0.14}s infinite` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={serviceCardImages[index % serviceCardImages.length]}
                    alt={service}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/12 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-white to-orange-50/70 p-5">
                  <h3 className="text-lg font-bold leading-7 text-stone-900 sm:text-xl">{service}</h3>
                </div>
              </article>
            ))}
          </div>
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
      <style jsx>{`
        @keyframes serviceFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </>
  );
}
