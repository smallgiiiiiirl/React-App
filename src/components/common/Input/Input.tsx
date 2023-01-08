import { FC } from "react";

interface InputProps {
    placeholder: string
}

export const Input: FC<InputProps> = (obj) => <input placeholder={obj.placeholder} />