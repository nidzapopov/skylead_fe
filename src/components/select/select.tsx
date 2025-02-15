import { SelectHTMLAttributes } from "react";

type options = {
    value: string | number;
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: options[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    value: string;
}

const Select = ({
    options,
    onChange,
    name,
    value
}: IProps) => {
    return (
        <div>
            <select value={value} name={name} onChange={onChange} >
                <option value=""></option>
                {options.map((opt:any) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
