"use client";

import Image from "next/image";

import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

const videoContent = {
  en: {
    eyebrow: "Video Gallery",
    title: "Spiritual Video Highlights",
    subtitle: "Four placeholder video cards are ready here. Share your real video links later and we can replace them quickly.",
    label: "Dummy Video",
    cta: "Video Link Coming Soon",
    items: [
      {
        title: "Temple Ritual Preview",
        image: "/images/hero-gokarna-ganapati.jpeg",
      },
      {
        title: "Pooja Ceremony Moments",
        image: "/images/gallery-purohit-1.jpeg",
      },
      {
        title: "Ganapati Seva Highlights",
        image: "/images/hero-ganapati.png",
      },
      {
        title: "Sacred Gokarna Darshana",
        image: "/images/gokarna-om-beach.jpeg",
      },
    ],
  },
  kn: {
    eyebrow: "ವೀಡಿಯೊ ಗ್ಯಾಲರಿ",
    title: "ಆಧ್ಯಾತ್ಮಿಕ ವೀಡಿಯೊ ಮುಖ್ಯಾಂಶಗಳು",
    subtitle: "ಇಲ್ಲಿ 4 ಡಮ್ಮಿ ವೀಡಿಯೊ ಕಾರ್ಡ್‌ಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ನಂತರ ನೀವು ನಿಜವಾದ ವೀಡಿಯೊ ಲಿಂಕ್‌ಗಳನ್ನು ಹಂಚಿದರೆ ಅವನ್ನು ಬೇಗನೆ ಬದಲಾಯಿಸಬಹುದು.",
    label: "ಡಮ್ಮಿ ವೀಡಿಯೊ",
    cta: "ವೀಡಿಯೊ ಲಿಂಕ್ ಶೀಘ್ರದಲ್ಲೇ",
    items: [
      {
        title: "ದೇವಸ್ಥಾನದ ವಿಧಿ ಪರಿಚಯ",
        image: "/images/hero-gokarna-ganapati.jpeg",
      },
      {
        title: "ಪೂಜೆ ಸಮಾರಂಭದ ಕ್ಷಣಗಳು",
        image: "/images/gallery-purohit-1.jpeg",
      },
      {
        title: "ಗಣಪತಿ ಸೇವಾ ಮುಖ್ಯಾಂಶಗಳು",
        image: "/images/hero-ganapati.png",
      },
      {
        title: "ಪವಿತ್ರ ಗೋಕರ್ಣ ದರ್ಶನ",
        image: "/images/gokarna-om-beach.jpeg",
      },
    ],
  },
} as const;

export function VideoShowcase() {
  const { lang } = useLanguage();
  const content = videoContent[lang];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f1_0%,#fff4ea_42%,#ffffff_100%)] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_56%)]" />
      <Container>
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_22px_55px_rgba(120,53,15,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(120,53,15,0.18)]"
              style={{ animation: `videoFloat 5.4s ease-in-out ${index * 0.15}s infinite` }}
            >
              <div className="relative aspect-video overflow-hidden bg-stone-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    {content.label}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-md">
                    ▶
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-white to-orange-50/60 p-5">
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <div className="mt-4 inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                  {content.cta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <style jsx>{`
        @keyframes videoFloat {
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
