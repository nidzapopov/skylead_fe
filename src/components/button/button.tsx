import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick: (e: unknown) => void;
}

const Button = ({
    label,
    onClick,
}: IProps) => {
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    );
};

export default Button;
