import { useEffect, useMemo, useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Grid from "@mui/material/Grid";

import TodoColumn from "./TodoColumn";

import { useTodoStore } from "@/store/todoStore";
import { type Todo, type TodoGroup, TODO_STATUS } from "@/types/todo";
import { type DragEndEvent } from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";

interface TodoBoardProps {
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export default function TodoBoard({ onEdit, onDelete }: TodoBoardProps) {
  const todos = useTodoStore((state) => state.todos);
  const moveTodos = useTodoStore((state) => state.moveTodos);
  const [items, setItems] = useState<Todo[]>(todos);
  useEffect(() => {
    setItems(todos);
  }, [todos]);
  const groupedTodos = useMemo<TodoGroup>(
    () => ({
      todo: items.filter((todo) => todo.status === TODO_STATUS.TODO),

      progress: items.filter((todo) => todo.status === TODO_STATUS.PROGRESS),

      done: items.filter((todo) => todo.status === TODO_STATUS.DONE),
    }),
    [todos],
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (active.id === over.id) {
      return;
    }
    const activeIndex = items.findIndex((todo) => todo.id === active.id);

    const overIndex = items.findIndex((todo) => todo.id === over.id);
    const activeTodo = items[activeIndex];

    const overTodo = items[overIndex];

    if (activeTodo.status === overTodo.status) {
      const newItems = arrayMove(items, activeIndex, overIndex);

      setItems(newItems);
      moveTodos(newItems);
      return;
    }
  };
  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TodoColumn
            id={TODO_STATUS.TODO}
            title="todo.todo"
            todos={groupedTodos.todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TodoColumn
            id={TODO_STATUS.PROGRESS}
            title="todo.progress"
            todos={groupedTodos.progress}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TodoColumn
            id={TODO_STATUS.DONE}
            title="todo.done"
            todos={groupedTodos.done}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
    </DndContext>
  );
}
