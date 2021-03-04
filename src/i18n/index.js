import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationJP from "../locales/jp/translation.json";
import translationVN from "../locales/vn/translation.json";
const resources = {
  en: {
    translation: translationEN,
  },
  jp: {
    translation: translationJP,
  },
  vn: {
    translation: translationVN,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vn",
    debug: true,
    resources,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
