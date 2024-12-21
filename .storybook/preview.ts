import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/style/component.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {},
    decorators: [
        withThemeByDataAttribute({
            themes: {
                // nameOfTheme: 'dataAttributeForTheme',
                light: "light",
                dark: "dark",
            },
            defaultTheme: "light",
            attributeName: "data-mode",
        }),
    ],
};

export default preview;
