import { VariantProps } from 'class-variance-authority';
export declare const badgeStyles: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "default" | "success" | "danger" | "warning" | "information" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeStyles>;
