"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";

export function ReviewsPageClient() {
  const { t } = useLanguage();
  const averageRating =
    t.reviewsData.reduce((total, review) => total + review.rating, 0) / t.reviewsData.length;

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
