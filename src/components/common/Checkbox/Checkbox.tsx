import { ChangeEvent, FC } from "react";

interface CheckProps {
    checked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Checkbox: FC<CheckProps> = ({ checked, onChange }) => <input type="checkbox" checked={checked} onChange={onChange} />