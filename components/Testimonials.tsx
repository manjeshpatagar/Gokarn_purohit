"use client";

import { Container } from "./Container";
import { ReviewCard } from "./ReviewCard";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionTitle
          eyebrow={t.common.reviews}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.reviewsData.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
