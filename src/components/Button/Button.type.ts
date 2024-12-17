import { ButtonVariants } from "./Button.variants";

interface Button extends React.ComponentProps<"button">, ButtonVariants {}

type ButtonProps = Readonly<Button>;
export default ButtonProps;
