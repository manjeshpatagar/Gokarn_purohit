"use client";

import Image from "next/image";

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
import { imageLibrary } from "@/lib/data";

const popularPoojas = [
  {
    title: "Ashlesha Bali Pooja",
    description:
      "A sacred ritual traditionally performed for naga dosha relief, family wellbeing, and spiritual peace with deep devotion.",
    image: "/images/popular-ashlesha-bali.jpeg",
    imagePosition: "center",
  },
  {
    title: "Navagraha Pooja",
    description:
      "A powerful pooja offered to the nine planets to invite harmony, remove obstacles, and strengthen positive life energy.",
    image: "/images/popular-navagraha-puja.png",
    imagePosition: "center 35%",
  },
  {
    title: "Pitra Puja",
    description:
      "A respectful ancestral ritual performed for blessings, peace of forefathers, and spiritual balance in the family.",
    image: "/images/popular-pitra-puja.jpg",
    imagePosition: "center 38%",
  },
  {
    title: "Ganapati Homam",
    description:
      "A devotional fire ritual for Lord Ganesha to seek auspicious beginnings, wisdom, and removal of difficulties.",
    image: "/images/popular-ganapati-homam.jpg",
    imagePosition: "center",
  },
  {
    title: "Lakshmi Pooja",
    description:
      "A graceful pooja for prosperity, abundance, and blessings in the home, especially during special family occasions.",
    image: "/images/popular-lakshmi-pooja.jpeg",
    imagePosition: "center 28%",
  },
];

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
        image="/images/hero-deity.png"
        imageAlt="Devotional Gokarna temple ritual"
        buttonLabel={t.home.aboutButton}
        buttonHref="/about"
      />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff5eb_36%,#ffffff_100%)] py-16">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_58%)]" />
        <Container>
          <SectionTitle
            eyebrow="Popular Pooja"
            title="Popular Pooja Services"
            subtitle="Explore some of the most requested poojas with clear details, beautiful visuals, and traditional significance."
            align="center"
          />
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {popularPoojas.map((pooja, index) => (
              <article
                key={pooja.title}
                className="group relative overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_22px_55px_rgba(120,53,15,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(120,53,15,0.18)]"
                style={{ animation: `popularPoojaFloat 5.4s ease-in-out ${index * 0.18}s infinite` }}
              >
                <div className="absolute inset-x-5 top-5 z-20 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    Sacred Ritual
                  </span>
                  <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={pooja.image}
                    alt={pooja.title}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                    style={{ objectPosition: pooja.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/12 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-2xl font-bold leading-tight text-white [text-shadow:0_12px_28px_rgba(0,0,0,0.45)]">
                      {pooja.title}
                    </h3>
                  </div>
                </div>
                <div className="relative bg-gradient-to-b from-white to-orange-50/70 p-5">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                  <p className="text-sm leading-7 text-stone-600">{pooja.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-orange-700">
                    <span className="h-px w-10 bg-orange-300" />
                    Popular Choice
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
        <style jsx>{`
          @keyframes popularPoojaFloat {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @media (max-width: 640px) {
            @keyframes popularPoojaFloat {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-4px);
              }
            }
          }
        `}</style>
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff6ed_40%,#ffffff_100%)] py-16">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_58%)]" />
        <Container>
          <SectionTitle
            eyebrow={t.common.areas}
            title={t.home.areasTitle}
            subtitle={t.home.areasSubtitle}
            align="center"
          />
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_24px_70px_rgba(120,53,15,0.12)]">
            <div className="grid items-center gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden">
                <img
                  src="/images/gokarna-town.avif"
                  alt="Gokarna temple spiritual atmosphere"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
                  Sacred Place
                </p>
                <h3 className="mt-3 text-3xl font-black text-stone-900 sm:text-4xl">
                  Gokarna
                </h3>
                <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  We currently focus our puja services in Gokarna, offering traditional rituals, temple-connected spiritual guidance, and respectful family ceremonies in this sacred devotional setting.
                </p>
                <div className="mt-6 inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                  Temple town service area
                </div>
              </div>
            </div>
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
