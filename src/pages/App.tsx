import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import { RootPath } from "./routes";
import AddTodo from "@/components/AddTodo/AddTodo";
import Todos from "@/components/Todos";
import LanguageToggle from "@/components/LanguageToggle";

function App() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <Helmet>
                <title>sample Title</title>
                <meta name="description" content="sample component" />
            </Helmet>

            <AddTodo>Add Todo</AddTodo>
            <Todos />
            <div>{t("learn")}</div>
            <LanguageToggle />
            <RootPath />
        </div>
    );
}

export default App;
