import styles from "./TodoColumn.module.css"
import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import TodoCard from "./TodoCard";

import type { Todo, TodoStatus } from "@/types/todo";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface TodoColumnProps {
  id: TodoStatus;
  title: string;
  todos: Todo[];

  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export default function TodoColumn({
  id,
  title,
  todos,
  onEdit,
  onDelete,
}: TodoColumnProps) {
  const { t } = useTranslation();
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <Card
      variant="outlined"
      ref={setNodeRef}
      sx={{
        height: "100%",
        minHeight: 500,
      }}
      className={styles.column}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" className="center space-between">
            <Typography variant="h6">{t(title)}</Typography>

            <Chip size="small" label={todos.length} />
          </Stack>

          <SortableContext
            items={todos.map((todo) => todo.id)}
            strategy={verticalListSortingStrategy}
          >
            {todos.length === 0 ? (
              <Typography color="text.secondary" className="center">
                {t("todo.empty")}
              </Typography>
            ) : (
              <Stack spacing={2}>
                {todos.map((todo) => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))}
              </Stack>
            )}
          </SortableContext>
        </Stack>
      </CardContent>
    </Card>
  );
}
