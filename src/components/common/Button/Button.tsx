import { FC, PropsWithChildren } from "react";

interface ButtonProps {
    onClick: () => void
    disabled?: boolean
    type?: "alert" | "submit"
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, disabled, type = "submit" }) => <button onClick={onClick} disabled={disabled}>{children}</button>
