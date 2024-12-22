import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
    title: "Components/Badge",
    component: Badge,
    // tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        children: "Cyrus-UI",
        variant: "default",
    },
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default",
                "primary",
                "secondary",
                "accent",
                "information",
                "danger",
                "warning",
                "success",
            ],
            table: {
                type: {
                    summary: "union"
                }
            }
        },
        children: {
            table: {
                type: {
                    summary: "ReactNode"
                }
            }
        }
    },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
    args: {
        variant: "primary",
    },
};
