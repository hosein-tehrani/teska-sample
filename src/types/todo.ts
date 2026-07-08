export const TODO_STATUS = {
  TODO: "todo",
  PROGRESS: "progress",
  DONE: "done",
} as const;

export const TODO_STATUS_LIST = [
  TODO_STATUS.TODO,
  TODO_STATUS.PROGRESS,
  TODO_STATUS.DONE,
] as const;

export type TodoStatus = (typeof TODO_STATUS)[keyof typeof TODO_STATUS];

export interface TodoFormData {
  title: string;
  description: string;
  status: TodoStatus;
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: string;
}

export interface TodoGroup {
  todo: Todo[];
  progress: Todo[];
  done: Todo[];
}
