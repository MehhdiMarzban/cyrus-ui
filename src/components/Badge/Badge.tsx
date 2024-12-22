import BadgeProps from "./Badge.type";
import { badgeStyles } from "./Badge.variant";

const Badge: React.FC<BadgeProps> = ({
    variant = "default",
    className,
    children = null,
    ...otherProps
}) => {
    return (
        <div className={badgeStyles({ variant, className })} {...otherProps}>
            {children}
        </div>
    );
};

export default Badge;
