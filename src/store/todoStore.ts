import { create } from "zustand";
import type { Todo, TodoStatus } from "@/types/todo";
import { loadStorage, saveStorage } from "@/utils/storage";

interface TodoStore {
  todos: Todo[];

  addTodo: (todo: Omit<Todo, "id" | "createdAt">) => void;

  updateTodo: (todo: Todo) => void;

  deleteTodo: (id: string) => void;

  moveTodos(todos: Todo[]): void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: loadStorage<Todo[]>("todos", []),

  addTodo: (todo) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...todo,
    };

    const todos = [...get().todos, newTodo];

    saveStorage("todos", todos);

    set({
      todos,
    });
  },

  updateTodo: (todo) => {
    const todos = get().todos.map((item) =>
      item.id === todo.id ? todo : item,
    );

    saveStorage("todos", todos);

    set({
      todos,
    });
  },

  deleteTodo: (id) => {
    const todos = get().todos.filter((item) => item.id !== id);

    saveStorage("todos", todos);

    set({
      todos,
    });
  },

  moveTodos: (todos) => {
    saveStorage("todos", todos);

    set({ todos });
  },
}));
