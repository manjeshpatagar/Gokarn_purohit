"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { detailedServices } from "@/lib/data";

export function PujaServicesPageClient() {
  const { t } = useLanguage();
  const extendedServiceCards = [...detailedServices, ...detailedServices];
  const otherPujaTypes = t.servicesList.filter(
    (service) => !t.detailedServices.some((detailed) => detailed.title === service),
  );

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
          {/* <SectionTitle
            eyebrow={t.pujaServicesPage.detailEyebrow}
            title={t.pujaServicesPage.detailTitle}
            subtitle={t.pujaServicesPage.detailSubtitle}
          /> */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-orange-100/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.08)] backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                  {t.pujaServicesPage.detailTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {t.pujaServicesPage.detailBody}
                </p>
              </div>
          
            </div>
            <div className="rounded-[2rem] border border-orange-100 bg-white/70 p-4 shadow-[0_28px_90px_rgba(120,53,15,0.12)] backdrop-blur-sm">
              <div className="grid gap-5 md:hidden">
                {extendedServiceCards.map((service, index) => {
                  const content = t.detailedServices[index % t.detailedServices.length];

                  return (
                    <article
                      key={`mobile-${service.image}-${index}`}
                      className="overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white shadow-[0_16px_45px_rgba(120,53,15,0.1)]"
                      style={{ animation: `serviceFloat 4.6s ease-in-out ${index * 0.16}s infinite` }}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={service.image}
                          alt={`${content.title} in Uttara Kannada`}
                          className="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                          Sacred Service
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-stone-900">{content.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600">{content.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="relative hidden overflow-hidden md:block">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/85 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/85 to-transparent" />
                <div className="service-marquee">
                  {extendedServiceCards.map((service, index) => {
                    const content = t.detailedServices[index % t.detailedServices.length];

                    return (
                      <article
                        key={`desktop-${service.image}-${index}`}
                        className="inline-flex w-[300px] shrink-0 flex-col overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white shadow-[0_16px_45px_rgba(120,53,15,0.1)] lg:w-[340px]"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={service.image}
                            alt={`${content.title} in Uttara Kannada`}
                            className="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                            Sacred Service
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-stone-900">{content.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-stone-600">{content.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
                <div className="grid gap-4 sm:grid-cols-2">
                {otherPujaTypes.map((service, index) => (
                  <div
                    key={service}
                    className="rounded-[1.5rem] border border-orange-100 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_50px_rgba(120,53,15,0.13)]"
                    style={{ animation: `serviceFloat 4.8s ease-in-out ${index * 0.18}s infinite` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg text-orange-700 shadow-inner">
                        {index % 2 === 0 ? "ॐ" : "✦"}
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                          Other Puja
                        </p>
                        <h3 className="mt-1 text-base font-semibold text-stone-900">{service}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        .service-marquee {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          animation: serviceMarquee 30s linear infinite;
        }

        .service-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes serviceMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.625rem));
          }
        }

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
