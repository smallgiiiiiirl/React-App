import { v4 as uuidv4 } from 'uuid';
import { store } from '.';
import { Task } from '../components/Task';
import {Store, TASKS_ACTIONS_TYPES, Action} from "./types"

const initialStste: Store = {
    tasks: []
}

export const reducer = (store: Store, action: Action): Store =>{
    switch(action.type){
        case TASKS_ACTIONS_TYPES.SET_TASKS:{
            return {tasks: action.payload}
        }

        case TASKS_ACTIONS_TYPES.ADD_TASKS :{
           return { tasks: [...store.tasks, {...action.payload, id: uuidv4()}]}
        }

        case TASKS_ACTIONS_TYPES.CHANGE_TASK:{
            const {id, task: newTask} = action.payload
            return {tasks: store.tasks.map((task)=> task.id === id ? {...task, ...newTask} : task)};
        }

        case TASKS_ACTIONS_TYPES.DELETE_TASK :{
            return {tasks: store.tasks.filter((task)=> task.id !== action.payload)};
        }
        
        default:{
            return store;
        }
    }
}