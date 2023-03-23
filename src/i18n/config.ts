import { initReactI18next } from "react-i18next";

import i18next, { InitOptions } from "i18next";
import LanguageDetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";

import translation_en from "./en/translation.json";
import translation_ru from "./ru/translation.json";

export const resources = {
  en: {
    translation: translation_en,
  },
  ru: {
    translation: translation_ru,
  },
};

const config: {
  detector: DetectorOptions;
  i18next: InitOptions;
} = {
  detector: {
    lookupLocalStorage: "language",
  },
  i18next: {
    fallbackLng: {
      ru: ["ru"],
      uk: ["ru", "en"],
      be: ["ru", "en"],
      kk: ["ru", "en"],
      default: ["en"],
    },
    resources,
    detection: {
      order: ["querystring", "navigator"],
      caches: [],
      lookupQuerystring: "language",
      lookupCookie: "language",
      lookupLocalStorage: "language",
      lookupSessionStorage: "language",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
  },
};

i18next
  .use(new LanguageDetector(null, config.detector))
  .use(initReactI18next)
  .init(config.i18next);
