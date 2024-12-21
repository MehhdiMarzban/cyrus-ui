import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const myTheme = create({
    base: "light",
    brandTitle: "Cyrus-UI",
    brandImage: "/images/logo.png",
    colorPrimary: "#8A55C8",
    colorSecondary: "#0C9586"
});

document.title = "Cyrus-UI";

addons.setConfig({
    theme: myTheme,
});
