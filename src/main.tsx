import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import "./i18n/config";
import { BrowserRouter } from "react-router-dom";

import "./styles/index.scss";
import { store } from "./app/store";
import App from "./pages/App";
import Error from "./pages/Error/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary FallbackComponent={Error}>
                <App />
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>,
);
