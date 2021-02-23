import { TodoState } from "./types";

export type TodoItem = {
  content: string;
  completed: boolean;
  id: number;
};

export const getTodoList = (todos: TodoState): Array<number> =>
  todos ? todos.allIds : [];

export const getTodoById = (todos: TodoState, id: number): TodoItem => {
  return { ...todos.byIds[id], id };
};

export const getTodos = (todos: TodoState): Array<TodoItem> =>
  getTodoList(todos).map((id) => getTodoById(todos, id));
