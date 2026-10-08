"use client";

import React, { createContext, useContext, useSyncExternalStore, useEffect } from "react";
import { TRANSLATIONS, Language } from "@/data/translations";

const LANGUAGE_STORAGE_KEY = "tj_language";
const languageListeners = new Set<() => void>();
let sessionLanguage: Language | null = null;

function getServerLanguageSnapshot(): Language {
  return "EN";
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "EN";
  if (sessionLanguage) return sessionLanguage;

  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === "AR" ? "AR" : "EN";
  } catch {
    return "EN";
  }
}

function subscribeToLanguage(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  languageListeners.add(callback);
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== LANGUAGE_STORAGE_KEY && event.key !== null) return;
    try {
      if (event.storageArea !== window.localStorage) return;
    } catch {
      return;
    }
    sessionLanguage = null;
    callback();
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    languageListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function setStoredLanguage(language: Language) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    sessionLanguage = null;
  } catch {
    // Keep language switching usable when browser privacy settings block storage.
    sessionLanguage = language;
  }
  languageListeners.forEach((listener) => listener());
}

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
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const isArabic = language === "AR";
  const t = isArabic ? TRANSLATIONS.AR : TRANSLATIONS.EN;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setStoredLanguage, isArabic, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
