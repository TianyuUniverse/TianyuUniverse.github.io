import { useEffect, useRef, useState } from "react";
import { siteCopy, type Language } from "./content";

const STORAGE_KEY = "preferred-language";

function getInitialLanguage(): Language {
  return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "zh";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [isChanging, setIsChanging] = useState(false);
  const timers = useRef<number[]>([]);
  const copy = siteCopy[language];

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = copy.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');

    if (description) description.content = copy.description;
    if (ogTitle) ogTitle.content = copy.title;
    if (ogDescription) ogDescription.content = copy.description;
    if (ogLocale) ogLocale.content = copy.locale;
    localStorage.setItem(STORAGE_KEY, language);
  }, [copy, language]);

  useEffect(
    () => () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      document.body.classList.remove("is-language-changing");
      document.body.removeAttribute("aria-busy");
    },
    [],
  );

  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language || isChanging) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLanguage(nextLanguage);
      return;
    }

    setIsChanging(true);
    document.body.classList.add("is-language-changing");
    document.body.setAttribute("aria-busy", "true");

    timers.current = [
      window.setTimeout(() => setLanguage(nextLanguage), 260),
      window.setTimeout(() => {
        setIsChanging(false);
        document.body.classList.remove("is-language-changing");
        document.body.removeAttribute("aria-busy");
        timers.current = [];
      }, 560),
    ];
  };

  return { language, changeLanguage, isChanging, copy };
}
