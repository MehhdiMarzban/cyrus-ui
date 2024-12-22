import { colors, black, currentColor, transparent, white } from "./src/tokens/colors";
/** @type {import('tailwindcss').Config} */
export default {
    // prefix: "cui-",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["class", '[data-mode="dark"]'],
    theme: {
        colors: {
            ...colors,
            currentColor,
            transparent,
            black,
            white,
        },
        extend: {},
    },
    plugins: [],
};
