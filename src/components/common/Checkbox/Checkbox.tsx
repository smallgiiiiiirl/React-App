import { FC } from "react";

interface CheckProps {
    checked: boolean
}

export const Checkbox: FC<CheckProps> = ({ checked }) => <input type="checkbox" checked={checked} />