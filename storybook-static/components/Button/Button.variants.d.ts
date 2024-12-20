import { VariantProps } from 'class-variance-authority';
export declare const buttonStyles: (props?: ({
    variant?: "primary" | "secondary" | "accent" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonStyles>;
