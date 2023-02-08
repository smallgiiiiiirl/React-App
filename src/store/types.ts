

export interface Tasks {
  id: string,
  label: string,
  isDone: boolean,
}
export interface Store{
 tasks: Tasks[],
}
 export enum TASKS_ACTIONS_TYPES{
  SET_TASKS = "SET_TASKS",
  ADD_TASKS = "ADD_TASKS",
  CHANGE_TASK = "CHANGE_TASK",
  DELETE_TASK = "DELETE_TASK"
 }

 export type SET_TASKS_ACTION = { type: TASKS_ACTIONS_TYPES.SET_TASKS; payload: Tasks[]}
 export type ADD_TASKS_ACTION = {type: TASKS_ACTIONS_TYPES.ADD_TASKS; payload: Omit<Tasks, "id">}
 export type DELETE_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.DELETE_TASK; payload: Tasks['id']}
 export type CHANGE_TASK_ACTION = {
  type: TASKS_ACTIONS_TYPES.CHANGE_TASK;
  payload: {id: Tasks['id'], task: Omit<Partial<Tasks>, 'id'>}
 }

 export type Action = DELETE_TASK_ACTION | SET_TASKS_ACTION | ADD_TASKS_ACTION | CHANGE_TASK_ACTION