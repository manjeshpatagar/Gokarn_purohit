"use client";

import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

const videoContent = {
  en: {
    eyebrow: "Video Gallery",
    title: "Spiritual Video Highlights",
    subtitle: "Watch ritual highlights and spiritual moments from important ceremonies in Gokarna.",
    label: "Temple Video",
    comingSoonLabel: "Coming Soon",
    items: [
      {
        title: "Narayan Bali",
        video: "/videos/narayan-bali-1.mp4",
      },
      {
        title: "Dasadana",
        video: "/videos/dasadana.mp4",
      },
      {
        title: "Narayana Bali",
        video: "/videos/narayana-bali-2.mp4",
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
    subtitle: "ಗೋಕರ್ಣದ ಪ್ರಮುಖ ವಿಧಿಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷಣಗಳ ವೀಡಿಯೊಗಳನ್ನು ಇಲ್ಲಿ ನೋಡಬಹುದು.",
    label: "ದೇವಸ್ಥಾನ ವೀಡಿಯೊ",
    comingSoonLabel: "ಶೀಘ್ರದಲ್ಲೇ",
    items: [
      {
        title: "ನಾರಾಯಣ ಬಲಿ",
        video: "/videos/narayan-bali-1.mp4",
      },
      {
        title: "ದಶದಾನ",
        video: "/videos/dasadana.mp4",
      },
      {
        title: "ನಾರಾಯಣ ಬಲಿ",
        video: "/videos/narayana-bali-2.mp4",
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
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_22px_55px_rgba(120,53,15,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(120,53,15,0.18)]"
              style={{ animation: `videoFloat 5.4s ease-in-out ${index * 0.15}s infinite` }}
            >
              <div className="relative aspect-video overflow-hidden bg-stone-950">
                {"video" in item ? (
                  <video
                    src={item.video}
                    className="h-full w-full object-cover"
                    controls
                    preload="metadata"
                  />
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        {content.comingSoonLabel}
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    {"video" in item ? content.label : content.comingSoonLabel}
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-white to-orange-50/60 p-5">
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
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
