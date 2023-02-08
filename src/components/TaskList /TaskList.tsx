import { Input, Button, Checkbox, Radiogroup } from "../common";
import { Tasks } from "../../store/types"
import { Task } from "../Task/Task";
import { useTask } from "./useTask"
import { FC, useState, useCallback, useMemo, Fragment } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { NotFound, TaskById, AuthPage, Header } from "../pages"

const filters = [
    { id: '1', label: 'Done', value: 'done' },
    { id: '2', label: 'Active', value: 'active' },
    { id: '3', label: 'All', value: 'all' },
];

export const TaskList = () => {
    const [newTask, setNewTask] = useState("")
    const [filter, setFilter] = useState(filters[2].value)
    const [isAuth, setIsAuth] = useState(false)
    const {
        tasks, addTaskHandler, taskChangeHandler, deleteTaskHandler
    } = useTask(newTask, () => setNewTask(''))

    const filteredTasks = useMemo(() => tasks.filter((task): boolean => {
        if (filter === 'all') {
            return true;
        }

        return filter === 'active' ? !task.isDone : task.isDone
    })
        , [tasks, filter]);
    return (
        <div>
            <Header />
            <Routes>

                <Route path="" element={
                    <Fragment>
                        <h1>ToDo List</h1>
                        <Input placeholder="New task" value={newTask} onChange={setNewTask} />
                        <Button onClick={addTaskHandler}>Add task</Button>
                        <Radiogroup onChange={setFilter} items={filters} name="filter" value={filter} />

                        <ul>
                            {filteredTasks.map((task) => (
                                <li key={task.id}>
                                    <Task task={task} onDelete={deleteTaskHandler} onChange={taskChangeHandler} />
                                </li>
                            ))}
                        </ul></Fragment>}
                />
                {/* <Route path="tasks/:id" element={<TaskById />} /> */}
                {isAuth && <Route path="/secret" element={<AuthPage />} />}
                <Route path="*" element={<NotFound />} />




            </Routes>


        </div>
    )
}