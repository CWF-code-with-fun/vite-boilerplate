import { useTranslation } from "react-i18next";

import AddTodo from "../components/AddTodo/AddTodo";
import LanguageToggle from "../components/LanguageToggle";
import Todos from "../components/Todos";
import { RootPath } from "./routes";

function App() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <AddTodo>children</AddTodo>
            <Todos />
            <div>{t("learn")}</div>
            <LanguageToggle />
            <RootPath />
        </div>
    );
}

export default App;
