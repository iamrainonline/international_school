// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// HOME JSOn
import homeEn from "../lang/pages/home/en.json";
import homeRo from "../lang/pages/home/ro.json";

// NAVBAR JSOn
import navEn from "../lang/pages/Navbar/en.json";
import navRo from "../lang/pages/Navbar/ro.json";

// the translations
const resources = {
  en: {
    Home: homeEn,
    Navbar: navEn,
  },
  ro: {
    Home: homeRo,
    Navbar: navRo,
  },
};

// Initialize i18n once, outside of any component
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources, // Provide the translations
    lng: "en", // Default language
    fallbackLng: "en",
    ns: ["Home", "Navbar"], // Namespaces corresponding to each page
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
