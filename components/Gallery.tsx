"use client";

import Image from "next/image";

import { galleryImages } from "@/lib/data";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff5ec_34%,#ffffff_100%)] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_56%)]" />
      <Container>
        <div className="relative">
          <SectionTitle
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            subtitle={t.gallery.subtitle}
            align="center"
          />
        </div>
        <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item, index) => (
            <article
              key={item.image}
              className="group overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_22px_55px_rgba(120,53,15,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(120,53,15,0.18)]"
              style={{ animation: `galleryFloat 5.6s ease-in-out ${index * 0.16}s infinite` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    Pooja Moments
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-2xl font-bold leading-tight text-white [text-shadow:0_12px_28px_rgba(0,0,0,0.45)]">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-to-b from-white to-orange-50/60 p-5">
                <p className="text-sm leading-7 text-stone-600">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <style jsx>{`
        @keyframes galleryFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
