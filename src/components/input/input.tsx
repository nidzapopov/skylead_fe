import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type,
    placeholder,
    name,
    onChange,
    value
}: IProps) => {
    return (
        <div>
            <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;
