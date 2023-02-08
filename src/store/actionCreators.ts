import { ADD_TASKS_ACTION, SET_TASKS_ACTION,DELETE_TASK_ACTION,CHANGE_TASK_ACTION, TASKS_ACTIONS_TYPES,Tasks} from "./types"

export const SetTasks = (tasks: Tasks[]): SET_TASKS_ACTION => ({
    type: TASKS_ACTIONS_TYPES.SET_TASKS,
    payload: tasks
})
 export const deleteTask =(id: Tasks['id']): DELETE_TASK_ACTION=>({
    type: TASKS_ACTIONS_TYPES.DELETE_TASK,
    payload: id
 })

 export const addTask = (tasks: Omit<Tasks, "id">): ADD_TASKS_ACTION =>({
    type: TASKS_ACTIONS_TYPES.ADD_TASKS,
    payload: tasks
 })

 export const changeTask = (id: Tasks['id'], tasks: Omit<Partial<Tasks>, "id">): CHANGE_TASK_ACTION =>({
    type: TASKS_ACTIONS_TYPES.CHANGE_TASK,
    payload: {id, tasks}
 })