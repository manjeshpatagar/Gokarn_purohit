
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";


export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur justify-items-center ">
<Container className=" relative flex w-full max-w-[1800px] mx-auto min-w-0 items-center gap-2 sm:gap-8 px-4 py-2 sm:min-h-[95px] sm:px-6">
       <Link
  href="/"
  className="flex min-w-0 flex-1 items-center gap-2"
>
         <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-10 sm:w-10 xl:h-10 xl:w-10">
  <Image
    src="/images/kaivalya-logo.jpeg"
    alt="Kaivalya Mukti Shetra Shetra Gokarna"
    fill
    className="object-cover"
    priority
  />
</div>
          <div className="min-w-0">
            <p className="whitespace-nowrap text-[10px] font-bold leading-tight text-stone-900 sm:text-sm">
  {t.brand.title}
</p>
          <p className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-stone-500">
  {t.brand.subtitle}
</p>
          </div>
        </Link>

        <nav className="absolute left-[53%] hidden -translate-x-1/2 items-center justify-center gap-6 xl:flex">
          {t.navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-orange-100 text-orange-700"
                    : "text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

       <div className="hidden w-[225px] shrink-0 items-center justify-end gap-3 xl:flex">
          <div className="flex rounded-full border border-orange-200 bg-orange-50 p-1">
            <button
              type="button"
              onClick={() => setLang("kn")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold transition ${lang === "kn" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              ಕನ್ನಡ
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              EN
            </button>
          </div>
          <Button href="/contact" className="whitespace-nowrap px-5 py-3 text-sm">
          {t.common.connect}</Button>
        </div>

        <button
  type="button"
  onClick={() => setIsOpen((value) => !value)}
  className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 text-stone-700 xl:hidden"
  aria-label={lang === "kn" ? "ಮೆನು ತೆರೆಯಿರಿ" : "Toggle menu"}
>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-orange-100 bg-white xl:hidden">
          <Container className="flex max-h-[70vh] flex-col overflow-y-auto py-4">
            <div className="mb-4 flex rounded-full border border-orange-200 bg-orange-50 p-1">
              <button
                type="button"
                onClick={() => setLang("kn")}
                className={`flex-1 rounded-full px-3 py-2 text-[10px] font-semibold transition ${lang === "kn" ? "bg-orange-600 text-white" : "text-orange-700"}`}
              >
                ಕನ್ನಡ
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex-1 rounded-full px-3 py-2 text-[10px] font-semibold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-orange-700"}`}
              >
                EN
              </button>
            </div>
            {t.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-100 text-orange-700"
                      : "text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-4 w-full py-2 text-[10px]" variant="primary">
              {t.common.connect}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
