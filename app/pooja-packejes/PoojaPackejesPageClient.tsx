"use client";

import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionTitle } from "@/components/SectionTitle";

const packageContent = {
  en: {
    eyebrow: "Pooja Packejes",
    title: "Traditional Pooja Packejes In Gokarna",
    subtitle:
      "Choose from five important pooja packejes with clear descriptions, sacred imagery, and visible cost ranges.",
    bookingTitle: "Share Your Package Requirement",
    bookingSubtitle: "Send your preferred pooja package, date, and contact details for booking support.",
    pricingTitle: "Price Range",
    pricingSubtitle: "Packages usually begin from Rs. 3,000, common ranges fall around Rs. 15,000, and major rituals can go up to Rs. 45,000.",
    pricingPoints: ["Starts at Rs. 3,000", "Common range around Rs. 15,000", "Major rituals up to Rs. 45,000"],
    items: [
      {
        title: "Simple Pinda Pradana (Shradda)",
        description:
          "A simple and respectful shradda package performed for ancestral remembrance, pinda pradana, and peaceful spiritual observance.",
        image: "/images/pooja-shraddha.jpeg",
        amount: "Rs. 3,000 - Rs. 5,000",
      },
      {
        title: "Pitra Pooja",
        description:
          "A respectful ancestral pooja performed for blessings, peace to forefathers, and spiritual balance in the family.",
        image: "/images/popular-pitra-puja.jpg",
        amount: "Rs. 8,000 - Rs. 15,000",
      },
      {
        title: "Tripindi Shradda",
        description:
          "A traditional shradda ritual performed with scriptural care for ancestral peace, unresolved family doshas, and spiritual relief.",
        image: "/images/pooja-shraddha.jpeg",
        amount: "Rs. 12,000 - Rs. 20,000",
      },
      {
        title: "Moksha Narayana Bali",
        description:
          "A significant pooja package offered for peace to departed souls, ancestral blessings, and release from difficult karmic burdens.",
        image: "/images/popular-ashlesha-bali.jpeg",
        amount: "Rs. 25,000 - Rs. 45,000",
      },
      {
        title: "Nagabali Pooja",
        description:
          "A sacred ritual package traditionally chosen for naga dosha remedies, family wellbeing, and spiritual harmony.",
        image: "/images/gallery-puja-9.jpeg",
        amount: "Rs. 15,000 - Rs. 30,000",
      },
    ],
  },
  kn: {
    eyebrow: "ಪೂಜೆ ಪ್ಯಾಕೇಜ್‌ಗಳು",
    title: "ಗೋಕರ್ಣದ ಸಂಪ್ರದಾಯಬದ್ಧ ಪೂಜೆ ಪ್ಯಾಕೇಜ್‌ಗಳು",
    subtitle:
      "ಮುಖ್ಯವಾದ ಐದು ಪೂಜೆ ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ಇಲ್ಲಿ ವಿವರ, ಚಿತ್ರ ಮತ್ತು ವೆಚ್ಚದ ಶ್ರೇಣಿಯೊಂದಿಗೆ ನೋಡಬಹುದು.",
    bookingTitle: "ನಿಮ್ಮ ಪ್ಯಾಕೇಜ್ ಅಗತ್ಯವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    bookingSubtitle: "ನಿಮಗೆ ಬೇಕಾದ ಪೂಜೆ ಪ್ಯಾಕೇಜ್, ದಿನಾಂಕ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಕಳುಹಿಸಿ.",
    pricingTitle: "ವೆಚ್ಚದ ಶ್ರೇಣಿ",
    pricingSubtitle: "ಪ್ಯಾಕೇಜ್‌ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ರೂ. 3,000 ರಿಂದ ಆರಂಭವಾಗುತ್ತವೆ, ಹಲವಾರು ಪೂಜೆಗಳು ರೂ. 15,000 ಸುತ್ತಮುತ್ತ ಇರುತ್ತವೆ, ಮತ್ತು ಮುಖ್ಯ ವಿಧಿಗಳು ರೂ. 45,000 ವರೆಗೆ ಹೋಗಬಹುದು.",
    pricingPoints: ["ಆರಂಭಿಕ ವೆಚ್ಚ ರೂ. 3,000", "ಸಾಮಾನ್ಯ ಶ್ರೇಣಿ ರೂ. 15,000", "ಮುಖ್ಯ ವಿಧಿಗಳು ರೂ. 45,000 ವರೆಗೆ"],
    items: [
      {
        title: "ಸರಳ ಪಿಂಡ ಪ್ರದಾನ (ಶ್ರಾದ್ಧ)",
        description:
          "ಪಿತೃಸ್ಮರಣೆ, ಪಿಂಡ ಪ್ರದಾನ ಮತ್ತು ಶಾಂತಿಯಾದ ಆತ್ಮಿಕ ಆಚರಣೆಗೆ ಸರಳವಾಗಿ ನೆರವೇರಿಸುವ ಶ್ರಾದ್ಧ ಪ್ಯಾಕೇಜ್.",
        image: "/images/pooja-shraddha.jpeg",
        amount: "ರೂ. 3,000 - ರೂ. 5,000",
      },
      {
        title: "ಪಿತೃ ಪೂಜೆ",
        description:
          "ಪೂರ್ವಜರ ಆಶೀರ್ವಾದ, ಆತ್ಮಶಾಂತಿ ಮತ್ತು ಕುಟುಂಬದ ಆತ್ಮಿಕ ಸಮತೋಲನಕ್ಕಾಗಿ ಗೌರವದಿಂದ ನೆರವೇರಿಸುವ ಪೂಜೆ.",
        image: "/images/popular-pitra-puja.jpg",
        amount: "ರೂ. 8,000 - ರೂ. 15,000",
      },
      {
        title: "ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ",
        description:
          "ಪಿತೃಶಾಂತಿ, ಕುಟುಂಬದ ದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಆತ್ಮಿಕ ನೆಮ್ಮದಿಗಾಗಿ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸುವ ಶ್ರಾದ್ಧ ವಿಧಿ.",
        image: "/images/pooja-shraddha.jpeg",
        amount: "ರೂ. 12,000 - ರೂ. 20,000",
      },
      {
        title: "ಮೋಕ್ಷ ನಾರಾಯಣ ಬಲಿ",
        description:
          "ಅಗಲಿದ ಆತ್ಮಗಳ ಶಾಂತಿ, ಪಿತೃಗಳ ಅನುಗ್ರಹ ಮತ್ತು ಕಠಿಣ ಕರ್ಮಬಂಧಗಳಿಂದ ಪರಿಹಾರಕ್ಕಾಗಿ ನೆರವೇರಿಸುವ ಮಹತ್ವದ ಪೂಜೆ.",
        image: "/images/popular-ashlesha-bali.jpeg",
        amount: "ರೂ. 25,000 - ರೂ. 45,000",
      },
      {
        title: "ನಾಗಬಲಿ ಪೂಜೆ",
        description:
          "ನಾಗದೋಷ ಪರಿಹಾರ, ಕುಟುಂಬದ ಕ್ಷೇಮ ಮತ್ತು ಆತ್ಮಿಕ ಸೌಹಾರ್ದಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡುವ ಪವಿತ್ರ ಪೂಜೆ ಪ್ಯಾಕೇಜ್.",
        image: "/images/gallery-puja-9.jpeg",
        amount: "ರೂ. 15,000 - ರೂ. 30,000",
      },
    ],
  },
} as const;

export function PoojaPackejesPageClient() {
  const { lang, t } = useLanguage();
  const content = packageContent[lang];
  const featuredPackage = content.items[0];
  const remainingPackages = content.items.slice(1);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#9a3412_0%,#7c2d12_52%,#431407_100%)] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.2),transparent_34%)]" />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-100 sm:text-sm sm:tracking-[0.28em]">
            {content.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">
            {content.subtitle}
          </p>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff7ed_0%,#fffbf7_42%,#ffffff_100%)] py-16">
        <Container>
          <article className="group overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-[0_24px_65px_rgba(120,53,15,0.14)] transition duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_30px_80px_rgba(120,53,15,0.18)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPackage.image}
                  alt={featuredPackage.title}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    01
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-gradient-to-b from-white to-orange-50/60 p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                    Featured Package
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-stone-900">{featuredPackage.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                    {featuredPackage.description}
                  </p>
                </div>
                <div className="mt-6 rounded-[1.25rem] bg-stone-950 px-5 py-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                    {content.pricingTitle}
                  </p>
                  <p className="mt-2 text-xl font-bold">{featuredPackage.amount}</p>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {remainingPackages.map((item, index) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_22px_55px_rgba(120,53,15,0.12)] transition duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_30px_75px_rgba(120,53,15,0.18)]"
                style={{ animation: `packageFloat 5.4s ease-in-out ${index * 0.16}s infinite` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-orange-50/60 p-5">
                  <h2 className="text-2xl font-bold text-stone-900">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-orange-100 bg-stone-950 px-6 py-5 text-white shadow-[0_20px_55px_rgba(120,53,15,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              {content.pricingTitle}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">
              {content.pricingSubtitle}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {content.pricingPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow={t.common.booking}
            title={content.bookingTitle}
            subtitle={content.bookingSubtitle}
            align="center"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </Container>
      </section>

      <style jsx>{`
        @keyframes packageFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </>
  );
}
