"use client";

import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";

const roomImages = [
  "/images/reviews-room-1.jpeg",
  "/images/reviews-room-2.jpeg",
  "/images/reviews-room-3.jpeg",
  "/images/reviews-room-4.jpeg",
  "/images/reviews-room-5.jpeg",
] as const;

export function ReviewsPageClient() {
  const { lang, t } = useLanguage();
  const averageRating =
    t.reviewsData.reduce((total, review) => total + review.rating, 0) / t.reviewsData.length;
  const roomContent =
    lang === "kn"
      ? {
          eyebrow: "ವಸತಿ ಸೌಲಭ್ಯ",
          title: "ಕುಟುಂಬಗಳಿಗೆ ಸ್ವಚ್ಛ ಮತ್ತು ಆರಾಮದಾಯಕ ಕೊಠಡಿಗಳು",
          subtitle:
            "ಪೂಜೆಗಾಗಿ ಬರುವ ಕುಟುಂಬಗಳಿಗೆ ನೆಮ್ಮದಿ, ವಿಶ್ರಾಂತಿ ಮತ್ತು ಸರಳ ವಸತಿ ಅನುಭವ ಒದಗಿಸಲು ಕೊಠಡಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ.",
          featureTitle: "ಕುಟುಂಬಗಳಿಗಾಗಿ ವಿಶಾಲ ವಿಶ್ರಾಂತಿ ಸ್ಥಳ",
          featureBody:
            "ಶಾಂತ ವಾತಾವರಣ, ಸರಳ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಉಪಯುಕ್ತ ವಾಸ್ತವ್ಯಕ್ಕೆ ಸೂಕ್ತವಾದ ಕೊಠಡಿಗಳಿಂದ ಪೂಜೆ ಪ್ರಯಾಣ ಹೆಚ್ಚು ಸುಲಭವಾಗುತ್ತದೆ.",
          badge: "Stay",
        }
      : {
          eyebrow: "Rooms & Stay",
          title: "Clean And Comfortable Rooms For Families",
          subtitle:
            "Families visiting for pujas can also stay in simple, restful rooms prepared for a calm and convenient experience.",
          featureTitle: "Spacious Resting Space For Families",
          featureBody:
            "A peaceful setup, practical comfort, and a warm stay option that helps families feel settled during their spiritual visit.",
          badge: "Stay",
        };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fff7ed_32%,#ffffff_100%)] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_56%)]" />
      <Container className="max-w-5xl">
        <div className="relative">
          <SectionTitle
            eyebrow={t.common.reviews}
            title={t.reviewsPage.title}
            subtitle={t.reviewsPage.subtitle}
            align="center"
          />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-amber-100/80 bg-white/85 p-6 text-center shadow-[0_18px_50px_rgba(120,53,15,0.08)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Average Rating</p>
            <p className="mt-3 text-4xl font-black text-stone-900">{averageRating.toFixed(1)}</p>
            <p className="mt-2 text-orange-500">★★★★★</p>
          </div>
          <div className="rounded-[1.75rem] border border-amber-100/80 bg-white/85 p-6 text-center shadow-[0_18px_50px_rgba(120,53,15,0.08)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Local Families</p>
            <p className="mt-3 text-4xl font-black text-stone-900">{t.reviewsData.length}+</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">Reviews from families across Gokarna, Kumta, Karwar, Sirsi and nearby places.</p>
          </div>
          <div className="rounded-[1.75rem] border border-amber-100/80 bg-white/85 p-6 text-center shadow-[0_18px_50px_rgba(120,53,15,0.08)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Why Families Trust</p>
            <p className="mt-3 text-xl font-bold text-stone-900">Traditional, Calm, Clear</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">Respectful guidance, proper rituals, and a simple family-friendly experience.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.reviewsData.map((review, index) => (
            <div
              key={review.name}
              style={{ animation: `reviewFloat 5.5s ease-in-out ${index * 0.16}s infinite` }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
        <div className="relative mt-16 overflow-hidden rounded-[2.25rem] border border-amber-100/80 bg-[linear-gradient(135deg,rgba(255,251,235,0.94),rgba(255,255,255,0.98))] p-6 shadow-[0_30px_90px_rgba(120,53,15,0.12)] sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute left-0 top-1/3 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" />
          <div className="relative">
            <SectionTitle
              eyebrow={roomContent.eyebrow}
              title={roomContent.title}
              subtitle={roomContent.subtitle}
              align="center"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
              <article className="group overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_24px_80px_rgba(28,25,23,0.12)]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={roomImages[0]}
                    alt={roomContent.title}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-md">
                    {roomContent.badge}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <h3 className="text-2xl font-bold">{roomContent.featureTitle}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-orange-50/90">
                      {roomContent.featureBody}
                    </p>
                  </div>
                </div>
              </article>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {roomImages.slice(1).map((image, index) => (
                  <article
                    key={image}
                    className="group overflow-hidden rounded-[1.6rem] border border-amber-100 bg-white/90 shadow-[0_20px_55px_rgba(120,53,15,0.1)] backdrop-blur-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${roomContent.title} ${index + 2}`}
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact">{t.common.shareReview}</Button>
        </div>
      </Container>
      <style jsx>{`
        @keyframes reviewFloat {
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
