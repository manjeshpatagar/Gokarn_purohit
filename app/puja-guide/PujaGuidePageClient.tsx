"use client";

import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { blogs } from "@/lib/data";

export function PujaGuidePageClient() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionTitle
          eyebrow={t.navLinks[1].label}
          title={t.pujaGuidePage.title}
          subtitle={t.pujaGuidePage.subtitle}
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} image={blog.image} {...t.blogsData[index]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
