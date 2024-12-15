import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";
import Button from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["primary", "secondary", "accent"],
            description: "primary | secondary | accent",
            mapping: {
                primary: "primary",
                secondary: "secondary",
                accent: "accent",
            },
            control: "select",
            type: "string",
        },
    },
    args: {},
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
