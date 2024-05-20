import { Helmet } from "react-helmet";
import useLocalization from "@/hooks/useLocalization";

import { RootPath } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { setLanguage } from "@/features/language/languageSlice";
import AddTodo from "@/components/AddTodo/AddTodo";
import Todos from "@/components/Todos";

function App() {
    const { t, i18n } = useLocalization();
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
        i18n.changeLanguage(language);
    }, [language, i18n]);

    function updateLanguage(lang: string) {
        const newLanguage = lang;
        dispatch(setLanguage(newLanguage));

        // Update the URL query parameter
        const params = new URLSearchParams(window.location.search);
        params.set("lng", newLanguage);
        window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
        document.documentElement.setAttribute("lang", lang);
    }

    function switchToBanglaHandler() {
        if (language === "en") {
            updateLanguage("bn");
        }
    }

    function switchToEnglishHandler() {
        if (language === "bn") {
            updateLanguage("en");
        }
    }
    return (
        <div className="container">
            <Helmet>
                <title>sample Title</title>
                <meta name="description" content="sample component" />
            </Helmet>
            <AddTodo>{t("todoPlaceholder")}</AddTodo>
            <Todos />
            <div>{t("learn")}</div>
            <button onClick={language === "en" ? switchToBanglaHandler : switchToEnglishHandler}>
                {t("languageChange")}
            </button>
            <RootPath />
        </div>
    );
}

export default App;
