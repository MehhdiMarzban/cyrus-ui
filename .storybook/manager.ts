import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const myTheme = create({
    base: "light",
    brandTitle: "Cyrus-UI",
    brandImage: "/images/logo.jpg",
});

addons.setConfig({
    theme: myTheme,
});
