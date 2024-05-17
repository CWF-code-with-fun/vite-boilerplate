import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./i18n/config.ts";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./pages/Error/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
   <ErrorBoundary FallbackComponent={Error}>
   <App />
   </ErrorBoundary>
  </Provider>,
);
