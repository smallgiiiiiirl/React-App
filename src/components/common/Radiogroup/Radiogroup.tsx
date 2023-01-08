import { FC, Fragment } from "react";

interface RadioProps {
    items: { id: string; label: string; value: string }[];
    name: string;
    value: string;
}
export const Radiogroup: FC<RadioProps> = (props) => {
    return (
        <div>
            {props.items.map((item) => (<Fragment key={item.id}>
                <input
                    type="radio"
                    id={item.id}
                    name={props.name}
                    value={item.value}
                    checked={item.value === props.value}
                />
                <label htmlFor={item.id}>{item.label}</label>
            </Fragment>))}
        </div>
    )
}