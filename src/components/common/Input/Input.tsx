import { FC, ChangeEvent } from "react";

interface InputProps {
    value: string,
    placeholder: string,
    onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ placeholder, onChange, value }) => <input value={value} placeholder={placeholder} onChange={(e) => (e.target.value, e)} />