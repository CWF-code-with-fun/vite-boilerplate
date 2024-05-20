import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import conf from "../conf/conf";

import Bangla from "./locales/bn.json";
import English from "./locales/en.json";

const resources = {
    bn: {
        translation: Bangla,
    },
    en: {
        translation: English,
    },
};

i18n.use(initReactI18next) // Integrates i18next with React
    .use(LanguageDetector) // Adds language detection
    .init({
        // Translation resources
        debug: conf.app_env !== "production",

        // Enables debug mode if not in production
        detection: {
            // Order of language detection: querystring first, then localStorage, then navigator
            lookupQuerystring: "lng",
            order: ["querystring", "localStorage", "navigator"], // Name of the query parameter to look for
        },

        fallbackLng: "en",

        // Converts language codes to lower case
        interpolation: {
            skipOnVariables: false, // Do not skip interpolation on variables
        },

        // Do not support non-explicit languages
        lowerCaseLng: true,

        // List of supported languages
        nonExplicitSupportedLngs: false,

        // Fallback language if the user's language is not available
        resources,

        supportedLngs: ["en", "bn"],
    })
    .catch(err => console.error(err));
