import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/features/language/languageSlice";
import { RootState } from "../app/store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    const lang = params.get("lng");
    if (lang && lang != language) {
      dispatch(setLanguage(lang));
    }
  }, [params, language, dispatch]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleToggle = () => {
    console.log(language);
    const newLanguage = language === "en" ? "bn" : "en";
    console.log(newLanguage);
    dispatch(setLanguage(newLanguage));

    // Update the URL query parameter
    const params = new URLSearchParams(window.location.search);
    params.set("lng", newLanguage);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };

  return (
    <button onClick={handleToggle}>
      {language === "en" ? "Switch to Bangla" : "Switch to English"}
    </button>
  );
};

export default LanguageToggle;
