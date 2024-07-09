import { createAction, props } from "@ngrx/store";
import { ToDo } from "./todo.state";

const addTodo = createAction('[ToDo] Add a todo', props<{ todo: ToDo }>());
const removeTodo = createAction('[Remove] Remove a todo', props<{ index: number }>());
const updateTodo = createAction('[Update] Update a todo', props<{ todo: ToDo }>());

export { addTodo, removeTodo, updateTodo };