import { Helmet } from "react-helmet";

import { RootPath } from "@/pages/routes";
import AddTodo from "@/components/AddTodo/AddTodo";
import Todos from "@/components/Todos";
import useLanguage from "@/hooks/useLanguageToogle";

function App() {
    const { language, switchToBangla, switchToEnglish, t } = useLanguage();

    return (
        <div className="container">
            <Helmet>
                s<title>sample Title</title>
                <meta name="description" content="sample component" />
            </Helmet>
            <AddTodo>{t("todoPlaceholder")}</AddTodo>
            <Todos />
            <div>{t("learn")}</div>
            <button onClick={language === "en" ? switchToBangla : switchToEnglish}>{t("languageChange")}</button>
            <RootPath />
        </div>
    );
}

export default App;
