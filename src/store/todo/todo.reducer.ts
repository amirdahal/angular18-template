import { createReducer, on } from "@ngrx/store";
import { inititalTodoState } from "./todo.state";
import { addTodo, removeTodo, updateTodo } from "./todo.action";

export const todoReducer = createReducer(
    inititalTodoState,
    on(addTodo, (state, { todo }) => [...state, todo]),
    on(removeTodo, (state, { index }) => [...state.filter(t => t.id !== index)]),
    on(updateTodo, (state, { todo }) => [...state.map(t => t.id === todo.id ? todo : t)]),
);