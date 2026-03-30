"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";

export function ReviewsPageClient() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <Container className="max-w-5xl">
        <SectionTitle
          eyebrow={t.common.reviews}
          title={t.reviewsPage.title}
          subtitle={t.reviewsPage.subtitle}
          align="center"
        />
        <div className="mt-10 space-y-6">
          {t.reviewsData.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact">{t.common.shareReview}</Button>
        </div>
      </Container>
    </section>
  );
}
