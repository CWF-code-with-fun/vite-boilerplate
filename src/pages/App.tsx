import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { store } from "../app/store";
import AddTodo from "../components/AddTodo/AddTodo";
import Todos from "../components/Todos";
import conf from "../conf/conf";
import LanguageToggle from "../components/LanguageToggle";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  console.log("variable", conf.url);
  console.log(import.meta.env.VITE_SOME_KEY);
  const [count, setCount] = useState(0);
  console.log("store", store);
  return (
    <div className="container">
      <AddTodo />
      <Todos />
      <div>{t("learn")}</div>
      <LanguageToggle></LanguageToggle>
    </div>
  );
}

export default App;
