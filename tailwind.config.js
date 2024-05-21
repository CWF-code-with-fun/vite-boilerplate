/** @type {import('tailwindcss').Config} */
import keepPreset, { theme } from "keep-react/preset";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
    presets: [keepPreset],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "Bijoy", "Arial", "sans-serif"],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#fff",
            purple: "#3f3cbb",
        },
    },
};
