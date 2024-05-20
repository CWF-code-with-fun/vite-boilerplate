import "../i18n/config";
import { useTranslation } from "react-i18next";

function useLocalization() {
    const { t, i18n } = useTranslation();

    // You can add custom functionalities or modifications here if needed

    return { t, i18n };
}

export default useLocalization;
