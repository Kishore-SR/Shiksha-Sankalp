import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import kn from "./locales/kn.json";

// Get the stored language from localStorage, default to English
const storedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    kn: { translation: kn },
  },
  lng: storedLanguage, // Set language from localStorage
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
