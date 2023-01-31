import { Input, Button, Checkbox, Radiogroup } from "../common";
import { Tasks as NewTask } from "../types"
import { FC, useState, useCallback } from "react";

interface TaskProps {
    task: NewTask,
    onChange: (id: NewTask["id"], newTask: Partial<NewTask>) => void;
    onDelete: (id: NewTask["id"]) => void;
}
export const Task: FC<TaskProps> = ({ task, onChange, onDelete }) => {
    const [name, setName] = useState(task.label)
    const [isEdited, setIsEdeted] = useState(false)

    const editBeginHandler = () => {
        setName(task.label)
        setIsEdeted(true)
    }
    const editEndHandler = () => {
        setIsEdeted(false)
        onChange(task.id, { label })
    }
    return (
        <div>
            <Checkbox checked={task.isDone} onChange={() => { task.id, { isDone: !task.isDone } }} />
            {isEdited ? <Input placeholder="New task" value={name} onChange={setName} /> : <span>{ }task.label</span>}
            {task.isDone && <Button onClick={() => onDelete(task.id)}>Delete task</Button>}
            {!task.isDone && !isEdited && <Button onClick={editBeginHandler}>Edit</Button>}
            {!task.isDone && isEdited && <Button onClick={editEndHandler}>Save</Button>}
        </div>
    )
}