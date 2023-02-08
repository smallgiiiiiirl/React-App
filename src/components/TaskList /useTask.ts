import { useState, useEffect, useCallback } from 'react';
import { Tasks } from '../../store/types';
import { v4 as uuidv4 } from 'uuid';


const localStorageKey = "__tasks__"

export const useTask = (newTask: string, Add: ()=> void) =>{
    const [tasks, setTasks] = useState<Tasks[]>(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
    
    const addTaskHandler =useCallback(()=>{
        setTasks((prevTask)=> [...prevTask, {label: newTask, id:uuidv4() ,isDone: false }])
    }, [setTasks, newTask, Add])
    
    const taskChangeHandler= (id: Tasks["id"], newTask: Partial<Tasks>)=>{
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, ...newTask } : task));}
   
    const deleteTaskHandler =(id: Tasks["id"])=>{
        setTasks((prevTask)=> prevTask.filter((task)=> task.id !== id))
    }
    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(tasks))
    }, [tasks])
    return{
        tasks,
        addTaskHandler,
        taskChangeHandler,
        deleteTaskHandler,
    }
}