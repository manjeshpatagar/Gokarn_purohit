"use client";

import Image from "next/image";

import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

const galleryContent = {
  en: {
    label: "Pooja Moments",
    items: [
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "Pitra Pooja",
        subtitle:
          "A respectful ancestral ritual performed for blessings, peace of forefathers, and spiritual balance in the family.",
        imagePosition: "center 38%",
      },
      {
        image: "/images/gallery-tripindi-narayana-bali.jpeg",
        title: "Moksha Narayana Nagabali Pooja",
        subtitle: "Deeply significant ritual setup prepared for ancestral peace, blessings, and spiritual relief.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-tripindi-narayana-bali.jpeg",
        title: "Tripindi Shradda",
        subtitle: "Traditional shradda ritual setup prepared for ancestral peace, offerings, and spiritual relief.",
        imagePosition: "center",
      },
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "Nagabali Pooje",
        subtitle:
          "A sacred ritual traditionally performed for naga dosha remedies, ancestral peace, and the spiritual wellbeing of the family.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-ganapati-pooja.jpeg",
        title: "Navagraha Pooja",
        subtitle: "Planetary pooja setup arranged with care for harmony, balance, and positive energy.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-purohit-2.jpeg",
        title: "Sacred Ritual Moment",
        subtitle: "A devotional glimpse of puja practice performed with care",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-purohit-3.jpeg",
        title: "Blessed Ceremony",
        subtitle: "Traditional prayer moments captured during puja service",
        imagePosition: "center",
      },
      {
        image: "/images/hero-deity.png",
        title: "Sacred Temple Presence",
        subtitle: "Traditional deity worship atmosphere",
        imagePosition: "center",
      },
      {
        image: "/images/popular-ashlesha-bali.jpeg",
        title: "Ashlesha Bali Ritual",
        subtitle: "Original pooja setup with family participation",
        imagePosition: "center",
      },
      {
        image: "/images/popular-navagraha-puja.png",
        title: "Navagraha Arrangement",
        subtitle: "Planetary pooja altar prepared with devotion",
        imagePosition: "center",
      },
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "Pitra Puja Offering",
        subtitle: "Ancestral rites performed with reverence",
        imagePosition: "center",
      },
    ],
  },
  kn: {
    label: "ಪೂಜೆ ಕ್ಷಣಗಳು",
    items: [
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "ಪಿತೃ ಪೂಜೆ",
        subtitle: "ಪೂರ್ವಜರ ಆಶೀರ್ವಾದ, ಆತ್ಮಶಾಂತಿ ಮತ್ತು ಕುಟುಂಬದ ಆತ್ಮಿಕ ಸಮತೋಲನಕ್ಕಾಗಿ ಗೌರವದಿಂದ ನೆರವೇರಿಸುವ ಪೂಜೆ.",
        imagePosition: "center 38%",
      },
      {
        image: "/images/gallery-tripindi-narayana-bali.jpeg",
        title: "ಮೋಕ್ಷ ನಾರಾಯಣ ನಾಗಬಲಿ ಪೂಜೆ",
        subtitle: "ಪಿತೃಶಾಂತಿ, ಅನುಗ್ರಹ ಮತ್ತು ಆತ್ಮಿಕ ಪರಿಹಾರಕ್ಕಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾದ ಮಹತ್ವದ ಪೂಜಾ ವ್ಯವಸ್ಥೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-tripindi-narayana-bali.jpeg",
        title: "ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ",
        subtitle: "ಪಿತೃಶಾಂತಿ, ಅರ್ಪಣೆ ಮತ್ತು ಆತ್ಮಿಕ ನೆಮ್ಮದಿಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾದ ಶ್ರಾದ್ಧ ಪೂಜಾ ವ್ಯವಸ್ಥೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "ನಾಗಬಲಿ ಪೂಜೆ",
        subtitle: "ನಾಗದೋಷ ಪರಿಹಾರ, ಪಿತೃಶಾಂತಿ ಮತ್ತು ಕುಟುಂಬದ ಆತ್ಮಿಕ ಕ್ಷೇಮಕ್ಕಾಗಿ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಪೂಜೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-ganapati-pooja.jpeg",
        title: "ನವಗ್ರಹ ಪೂಜೆ",
        subtitle: "ಸೌಹಾರ್ದ, ಸಮತೋಲನ ಮತ್ತು ಶುಭಶಕ್ತಿಗಾಗಿ ಕಾಳಜಿಯಿಂದ ಸಿದ್ಧಪಡಿಸಲಾದ ನವಗ್ರಹ ಪೂಜಾ ವ್ಯವಸ್ಥೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-purohit-2.jpeg",
        title: "ಪವಿತ್ರ ಪೂಜೆ ಕ್ಷಣ",
        subtitle: "ಭಕ್ತಿಯಿಂದ ನೆರವೇರಿಸಿದ ಪೂಜೆಯ ಸುಂದರ ಕ್ಷಣದ ಝಲಕ್.",
        imagePosition: "center",
      },
      {
        image: "/images/gallery-purohit-3.jpeg",
        title: "ಆಶೀರ್ವಾದದ ಸಮಾರಂಭ",
        subtitle: "ಪೂಜೆ ಸೇವೆಯ ವೇಳೆ ಸೆರೆಹಿಡಿದ ಸಂಪ್ರದಾಯಬದ್ಧ ಪ್ರಾರ್ಥನಾ ಕ್ಷಣಗಳು.",
        imagePosition: "center",
      },
      {
        image: "/images/hero-deity.png",
        title: "ಪವಿತ್ರ ದೇವಸ್ಥಾನ ಸಾನ್ನಿಧ್ಯ",
        subtitle: "ದೇವತಾ ಆರಾಧನೆಯ ಸಂಪ್ರದಾಯಬದ್ಧ ಆಧ್ಯಾತ್ಮಿಕ ವಾತಾವರಣ.",
        imagePosition: "center",
      },
      {
        image: "/images/popular-ashlesha-bali.jpeg",
        title: "ಅಶ್ಲೇಷ ಬಲಿ ವಿಧಿ",
        subtitle: "ಕುಟುಂಬದ ಭಾಗವಹಿಸುವಿಕೆಯಿಂದ ಸಿದ್ಧಪಡಿಸಲಾದ ಮೂಲ ಪೂಜಾ ವ್ಯವಸ್ಥೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/popular-navagraha-puja.png",
        title: "ನವಗ್ರಹ ವ್ಯವಸ್ಥೆ",
        subtitle: "ಭಕ್ತಿಯಿಂದ ಸಿದ್ಧಪಡಿಸಿದ ಗ್ರಹಪೂಜೆಯ ವೇದಿ ವ್ಯವಸ್ಥೆ.",
        imagePosition: "center",
      },
      {
        image: "/images/popular-pitra-puja.jpg",
        title: "ಪಿತೃ ಪೂಜೆ ಅರ್ಪಣೆ",
        subtitle: "ಗೌರವದಿಂದ ನೆರವೇರಿಸಲಾದ ಪಿತೃಕಾರ್ಯದ ಪೂಜಾ ಅರ್ಪಣೆ.",
        imagePosition: "center",
      },
    ],
  },
} as const;

export function Gallery() {
  const { lang, t } = useLanguage();
  const content = galleryContent[lang];

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
          {content.items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
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
                    {content.label}
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
