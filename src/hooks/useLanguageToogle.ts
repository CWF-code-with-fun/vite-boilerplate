import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import type { i18n as I18nType } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/features/language/languageSlice";
import type { RootState } from "../app/store";
import "../i18n/config";

interface UseLanguageResult {
    language: string;
    switchToBangla: () => void;
    switchToEnglish: () => void;
    i18n: I18nType;
    t: (key: string) => string;
}

const useLanguage = (): UseLanguageResult => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const language = useSelector<RootState, string>(state => state.language.selected);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lng");
        if (lang && lang !== language) {
            dispatch(setLanguage(lang));
        }
    }, [language, dispatch]);

    useEffect(() => {
        i18n.changeLanguage(language).catch(err => console.error(err));
        document.documentElement.setAttribute("lang", language);
    }, [language, i18n]);

    const updateLanguage = useCallback(
        (lang: string) => {
            dispatch(setLanguage(lang));

            // Update the URL query parameter
            const params = new URLSearchParams(window.location.search);
            params.set("lng", lang);
            window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
        },
        [dispatch],
    );

    const switchToBangla = useCallback(() => {
        if (language === "en") {
            updateLanguage("bn");
        }
    }, [language, updateLanguage]);

    const switchToEnglish = useCallback(() => {
        if (language === "bn") {
            updateLanguage("en");
        }
    }, [language, updateLanguage]);

    return { language, switchToBangla, switchToEnglish, i18n, t };
};

export default useLanguage;
