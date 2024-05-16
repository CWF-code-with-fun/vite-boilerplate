import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./i18n/config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
