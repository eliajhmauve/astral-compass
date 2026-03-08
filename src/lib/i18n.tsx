import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "zh" | "en";

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (zh: string, en: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "zh",
  toggleLang: () => {},
  t: (zh) => zh,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("zh");
  const toggleLang = useCallback(() => setLang((l) => (l === "zh" ? "en" : "zh")), []);
  const t = useCallback((zh: string, en: string) => (lang === "zh" ? zh : en), [lang]);
  return <I18nContext.Provider value={{ lang, toggleLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
