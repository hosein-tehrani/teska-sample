import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import TodoBoard from "@/components/todo/TodoBoard";
import AddTodoButton from "@/components/todo/AddTodoButton";
import { useTodoStore } from "@/store/todoStore";
import type { Todo, TodoFormData } from "@/types/todo";
import toast from "react-hot-toast";
import TodoDialog from "@/components/todo/TodoDialog";
import ConfirmDialog from "@/components/common/ConfirmDialog";

export default function TodosPage() {
  const { t } = useTranslation();
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    setDialogOpen(true);
  };

  const handleDelete = (todo: Todo) => {
    setSelectedTodo(todo);
    setDeleteDialogOpen(true);
  };

  const handleSubmit = (values: TodoFormData) => {
    if (selectedTodo) {
      updateTodo({
        ...selectedTodo,
        ...values,
      });
      toast.success(t("todo.updated"));
    } else {
      addTodo(values);
      toast.success(t("todo.created"));
    }
    setDialogOpen(false);
    setSelectedTodo(null);
  };

  const handleConfirmDelete = () => {
    if (!selectedTodo) {
      return;
    }
    deleteTodo(selectedTodo.id);
    toast.success(t("todo.deleted"));
    setDeleteDialogOpen(false);
    setSelectedTodo(null);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedTodo(null);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedTodo(null);
  };
  return (
    <Container maxWidth={false}>
      <Typography variant="h4" className="mb-4">
        {t("todo.title")}
      </Typography>

      <TodoBoard onEdit={handleEdit} onDelete={handleDelete} />
      <TodoDialog
        open={dialogOpen}
        initialData={selectedTodo ?? undefined}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
      />
      <ConfirmDialog
        open={deleteDialogOpen}
        title={t("todo.deleteTodo")}
        description={t("todo.deleteDescription")}
        confirmText={t("common.delete")}
        cancelText={t("common.cancel")}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
      />
      <AddTodoButton onClick={() => setDialogOpen(true)} />
    </Container>
  );
}
