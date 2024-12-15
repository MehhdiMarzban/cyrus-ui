interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent";
}

type ButtonProps = Readonly<Button>;
export default ButtonProps;
