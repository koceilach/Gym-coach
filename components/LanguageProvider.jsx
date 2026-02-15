"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import translations from "@/lib/translations";

const LangContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "en" ? "fr" : "en"));
  }, []);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
