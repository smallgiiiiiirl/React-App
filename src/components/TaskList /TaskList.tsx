import { Input, Button, Checkbox, Radiogroup } from "../common";
import { Tasks } from "../types"
import { Task } from "../Task/Task";
import { useTask } from "./useTask"
import { FC, useState, useCallback, useMemo } from "react";

const filters = [
    { id: '1', label: 'Done', value: 'done' },
    { id: '2', label: 'Active', value: 'active' },
    { id: '3', label: 'All', value: 'all' },
];

export const TaskList = () => {
    const [newTask, setNewTask] = useState("")
    const [filter, setFilter] = useState(filters[3].value)
    const {
        tasks, addTaskHandler, taskChangeHandler, deleteTaskHandler
    } = useTask(newTask, () => setNewTask(""))

    const filteredUsers = useMemo(() => tasks.filter((task): boolean => {
        if (filter === 'all') {
            return true;
        }

        return filter === 'active' ? !task.isDone : task.isDone
    })
        , [tasks, filter]);
    return (
        <div>
            <h1>ToDo List</h1>
            <Input placeholder="New task" value={newTask} onChange={setNewTask} />

        </div>
    )
}