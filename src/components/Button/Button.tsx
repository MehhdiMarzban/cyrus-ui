import ButtonProps from "./Button.type";

const buttonVariant: Record<Required<ButtonProps>["variant"], string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className, ...rest }) => {
    return (
        <button className={`btn ${buttonVariant[variant]} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
