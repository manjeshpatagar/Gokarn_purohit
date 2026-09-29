"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "./Button";
import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

const heroImages = [
  "/images/hero-gokarna-ganapati.jpeg",
  "/images/hero-ganapati.png",
  "/images/hero-deity.png",
  "/images/hero-mahabaleswara.png",
];

export function Hero() {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const titleParts = t.hero.title.split(" ");
  const titleMain = titleParts.slice(0, -1).join(" ");
  const titleAccent = titleParts.at(-1) ?? t.hero.title;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-950">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeImage === index ? 1 : 0,
              transform: activeImage === index ? "scale(1.05)" : "scale(1)",
              transitionProperty: "opacity, transform",
            }}
          >
            <Image
              src={image}
              alt=""
              fill
              priority={index === 0}
              quality={100}
              sizes="100vw"
              className="object-cover object-center opacity-35 blur-sm scale-105"
            />
            <Image
              src={image}
              alt=""
              fill
              priority={index === 0}
              quality={100}
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.68),rgba(120,53,15,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_32%)]" />
      <Container className="relative py-24 md:min-h-[720px] md:py-32 lg:flex lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-amber-200/30 bg-black/25 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-orange-100 backdrop-blur-sm">
            {t.brand.subtitle}
          </p>
          <h1 className="max-w-4xl">
            <span className="block text-[2.6rem] font-extrabold leading-[1.02] tracking-[0.04em] text-transparent md:text-[4.4rem] lg:text-[5.25rem]">
              <span
                className="bg-gradient-to-r from-amber-50 via-yellow-100 to-orange-200 bg-clip-text [text-shadow:0_12px_30px_rgba(0,0,0,0.32)]"
                style={{ WebkitTextStroke: "0.6px rgba(120, 53, 15, 0.2)" }}
              >
                {titleMain}
              </span>
            </span>
            <span className="mt-4 block text-2xl font-semibold leading-none tracking-[0.18em] text-amber-50 md:text-4xl lg:text-5xl">
              <span className="inline-flex rounded-full border border-amber-200/30 bg-white/10 px-5 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                {titleAccent}
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-orange-50 md:text-lg">
            {t.hero.subtitle}
          </p>
          <p className="mt-4">
            <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-200/12 px-5 py-2 text-sm font-semibold tracking-[0.12em] text-amber-50 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm md:text-base">
              {t.hero.designation}
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`tel:${t.contactDetails.phone}`}>{t.hero.callBtn}</Button>
            <Button href={`https://wa.me/${t.contactDetails.phone.replace(/[^\d]/g, "")}`} variant="secondary">
              {t.hero.whatsappBtn}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
