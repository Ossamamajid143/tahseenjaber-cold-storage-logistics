"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, Language } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  t: typeof TRANSLATIONS.EN;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
  isArabic: false,
  t: TRANSLATIONS.EN,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  useEffect(() => {
    // Read saved preference from localStorage
    const saved = localStorage.getItem("tj_language") as Language | null;
    if (saved === "EN" || saved === "AR") {
      setLanguageState(saved);
      document.documentElement.lang = saved === "AR" ? "ar" : "en";
      document.documentElement.dir = saved === "AR" ? "rtl" : "ltr";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("tj_language", lang);
      document.documentElement.lang = lang === "AR" ? "ar" : "en";
      document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    }
  };

  const isArabic = language === "AR";
  const t = isArabic ? TRANSLATIONS.AR : TRANSLATIONS.EN;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
