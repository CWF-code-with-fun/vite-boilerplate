import conf from "../conf/conf";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "./locales/en.json";
import Bangla from "./locales/bn.json";

const resources = {
    en: {
        translation: English,
    },
    bn: {
        translation: Bangla,
    },
};

i18n.use(initReactI18next) // Integrates i18next with React
    .use(LanguageDetector) // Adds language detection
    .init({
        fallbackLng: "en", // Fallback language if the user's language is not available
        resources, // Translation resources
        debug: conf.app_env !== "production", // Enables debug mode if not in production
        detection: {
            order: ["querystring", "localStorage", "navigator"], // Order of language detection: querystring first, then localStorage, then navigator
            lookupQuerystring: "lng", // Name of the query parameter to look for
        },
        supportedLngs: ["en", "bn"], // List of supported languages
        nonExplicitSupportedLngs: false, // Do not support non-explicit languages
        lowerCaseLng: true, // Converts language codes to lower case
        interpolation: {
            skipOnVariables: false, // Do not skip interpolation on variables
        },
    });
