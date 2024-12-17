import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
    [
        "font-semibold",
        "border",
        "rounded",
        "shadow-sm",
        "inline-flex",
        "items-center",
        "cursor-pointer",
        "gap-1.5",
        "focus-visible:outline",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "transition-colors",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        "disabled:pointer-events-none",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary-600",
                    "text-white",
                    "border-transparent",
                    "hover:bg-primary-500",
                    "active:bg-primary-400",
                ],
                secondary: [
                    "bg-secondary-600",
                    "text-white",
                    "border-transparent",
                    "hover:bg-secondary-500",
                    "active:bg-secondary-400",
                ],
                accent: [
                    "bg-accent-600",
                    "text-white",
                    "border-transparent",
                    "hover:bg-accent-500",
                    "active:bg-accent-400",
                ],
            },
            size: {
                small: ["text-sm", "px-2", "py-1"],
                medium: ["text-sm", "px-2.5", "py-1.5"],
                large: ["text-sm", "px-3", "py-2"],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonStyles>;
