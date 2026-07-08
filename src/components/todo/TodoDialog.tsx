import {
  useEffect,
  useState,
  type ChangeEvent,
} from "react";

import { useTranslation } from "react-i18next";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import {
  TODO_STATUS,
  type Todo,
  type TodoFormData,
  type TodoStatus,
} from "@/types/todo";

interface TodoDialogProps {
  open: boolean;
  initialData?: Todo;
  onClose: () => void;
  onSubmit: (
    values: TodoFormData
  ) => void;
}

const defaultValues: TodoFormData = {
  title: "",
  description: "",
  status: TODO_STATUS.TODO,
};

export default function TodoDialog({
  open,
  initialData,
  onClose,
  onSubmit,
}: TodoDialogProps) {
  const { t } = useTranslation();

  const [form, setForm] =
    useState<TodoFormData>(defaultValues);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        description: initialData.description,
        status: initialData.status,
      });

      return;
    }

    setForm(defaultValues);
  }, [initialData, open]);

  const handleChange =
    (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = event.target;

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const handleStatusChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      status: event.target.value as TodoStatus,
    }));
  };

  const handleSubmit = () => {
    onSubmit({
      title: form.title.trim(),
      description:
        form.description.trim(),
      status: form.status,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {initialData
          ? t("todo.editTodo")
          : t("todo.newTodo")}
      </DialogTitle>

      <DialogContent>
        <Stack
          spacing={2}
          sx={{ mt: 1 }}
        >
          <TextField
            name="title"
            label={t("todo.titleLabel")}
            value={form.title}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            name="description"
            label={t("todo.description")}
            value={form.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />

          <TextField
            select
            name="status"
            label={t("todo.status")}
            value={form.status}
            onChange={handleStatusChange}
          >
            <MenuItem
              value={TODO_STATUS.TODO}
            >
              {t("todo.todo")}
            </MenuItem>

            <MenuItem
              value={
                TODO_STATUS.PROGRESS
              }
            >
              {t("todo.progress")}
            </MenuItem>

            <MenuItem
              value={TODO_STATUS.DONE}
            >
              {t("todo.done")}
            </MenuItem>
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          {t("common.cancel")}
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {initialData
            ? t("common.save")
            : t("common.create")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}