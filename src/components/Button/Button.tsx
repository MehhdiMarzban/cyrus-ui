import type ButtonProps from "./Button.type";
import { buttonStyles } from "./Button.variants";

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    className,
    ...otherProps
}: ButtonProps) => {
    return (
        <button className={buttonStyles({ variant, size, className })} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
