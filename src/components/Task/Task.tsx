import { Input, Button, Checkbox, Radiogroup } from "../common";
import { Tasks as NewTask } from "../../store/types"
import { FC, useState, useCallback } from "react";
import { Link } from "react-router-dom";

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
        onChange(task.id, { label: name }) // не понимаю, что не так
    }
    return (
        <div>
            {/* <Link to="/task:id" >{task.label}</Link> */}
            <Checkbox checked={task.isDone} onChange={() => { onChange(task.id, { isDone: !task.isDone }) }} />
            {isEdited ? <Input placeholder="New task" value={name} onChange={setName} /> : <span>{task.label}</span>}
            {task.isDone && <Button onClick={() => onDelete(task.id)}>Delete task</Button>}
            {!task.isDone && !isEdited && <Button onClick={editBeginHandler}>Edit</Button>}
            {!task.isDone && isEdited && <Button onClick={editEndHandler}>Save</Button>}
        </div>
    )
}