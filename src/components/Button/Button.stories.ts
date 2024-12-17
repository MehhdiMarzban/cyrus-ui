import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";
import Button from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["primary", "secondary", "accent"],
            description: "you can choose one of this variant :",
            mapping: {
                primary: "primary",
                secondary: "secondary",
                accent: "accent",
            },
            table: {
                type: {
                    summary: "union",
                    detail: "'primary' | 'secondary' | 'accent'",
                },
            },
            control: "select",
            type: "string",
        },
        disabled: {
            control: "boolean",
            description: "you can disable button :",
        },
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
            description: "you can change size of button :",
            table: {
                type: {
                    summary: "union",
                    detail: "'small' | 'medium' | 'large'",
                },
            },
        },
    },
    args: {
        disabled: false,
        size: "medium",
        children: "button",
    },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

//* Button Stories
export const primary: Story = {
    args: {
        children: "primary button",
        variant: "primary",
    },
};

export const secondary: Story = {
    args: {
        children: "secondary button",
        variant: "secondary",
    },
};

export const accent: Story = {
    args: {
        children: "accent button",
        variant: "accent",
    },
};

export const small: Story = {
    args: {
        size: "small",
    },
};

export const medium: Story = {
    args: {
        size: "medium",
    },
};

export const large: Story = {
    args: {
        size: "large",
    },
};

export const darkMode: Story = {
    parameters: {
        themes: {
            themeOverride: "dark",
        },
    },
    args: {
        children: "dark button",
        variant: "primary",
    },
};

export const mobileScreen: Story = {
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

export const clickingButton: Story = {
    args: {
        children: "click me!",
        variant: "primary",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        userEvent.click(button);
    },
};
