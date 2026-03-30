"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Locale, translations } from "@/lib/translations";

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (typeof translations)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>("kn");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
