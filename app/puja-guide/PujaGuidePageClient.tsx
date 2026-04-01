"use client";

import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { blogs } from "@/lib/data";

const guideImagePositions = [
  "center",
  "center",
  "center",
  "center 20%",
  "center 18%",
  "center",
];

export function PujaGuidePageClient() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f1_0%,#fffaf5_38%,#fff_100%)] py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_58%)]" />
      <Container>
        <div className="relative">
          <SectionTitle
            eyebrow={t.navLinks[1].label}
            title={t.pujaGuidePage.title}
            subtitle={t.pujaGuidePage.subtitle}
            align="center"
          />
        </div>
        <div className="relative mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.title}
              image={blog.image}
              eyebrow={t.navLinks[1].label}
              imagePosition={guideImagePositions[index]}
              {...t.blogsData[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
