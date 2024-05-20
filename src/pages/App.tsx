import useLocalization from "@/hooks/useLocalization";
import AddTodo from "../components/AddTodo/AddTodo";
import Todos from "../components/Todos";

import { RootPath } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { setLanguage } from "@/features/language/languageSlice";

function App() {
    const { t, i18n } = useLocalization();
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);

    useEffect(() => {
        console.log("inside 1");
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lng");
        console.log(lang);
        if (lang && lang !== language) {
            console.log("dispatch called");
            dispatch(setLanguage(lang));
        }
    }, [language, dispatch]);

    useEffect(() => {
        console.log("inside 2");
        i18n.changeLanguage(language);
        // LocalizationService.changeLanguage(language);
    }, [language, i18n]);

    function updateLanguage(lang: string) {
        const newLanguage = lang;
        dispatch(setLanguage(newLanguage));

        // Update the URL query parameter
        const params = new URLSearchParams(window.location.search);
        params.set("lng", newLanguage);
        window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
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
            <AddTodo>children</AddTodo>
            <Todos />
            <div>{t("learn")}</div>
            <button onClick={switchToBanglaHandler}>Switch to Bangla</button>
            <button onClick={switchToEnglishHandler}>Switch to English</button>
            <RootPath />
        </div>
    );
}

export default App;
