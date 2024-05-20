import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { setLanguage } from "@/features/language/languageSlice";

import type { RootState } from "../app/store";

function LanguageToggle() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lng");
        if (lang && lang !== language) {
            dispatch(setLanguage(lang));
        }
    }, [language, dispatch]);

    useEffect(() => {
        i18n.changeLanguage(language).catch(err => console.error(err));
    }, [language, i18n]);

    const handleToggle = () => {
        const newLanguage = language === "en" ? "bn" : "en";
        dispatch(setLanguage(newLanguage));

        // Update the URL query parameter
        const params = new URLSearchParams(window.location.search);
        params.set("lng", newLanguage);
        window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    };

    return <button onClick={handleToggle}>{language === "en" ? "Switch to Bangla" : "Switch to English"}</button>;
}

export default LanguageToggle;
