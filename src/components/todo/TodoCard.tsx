import styles from "./TodoCard.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { DragIndicator } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import type { Todo } from "@/types/todo";

interface TodoCardProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export default function TodoCard({ todo, onEdit, onDelete }: TodoCardProps) {
  const { t } = useTranslation();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: todo.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      variant="outlined"
      sx={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <CardContent className={styles.dragCard}>
        <Stack spacing={2}>
          <Stack direction="row" className="flex-start space-between">
            <Typography variant="subtitle1">{todo.title}</Typography>

            <Stack direction="row" spacing={1}>
              <Tooltip title={t("todo.drag")} className={styles.dragBtn}>
                <IconButton
                  {...listeners}
                  size="small"
                  sx={{
                    cursor: "grab",
                  }}
                >
                  <DragIndicator fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {todo.description}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Tooltip title={t("todo.edit")}>
          <IconButton size="small" onClick={() => onEdit(todo)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("todo.delete")}>
          <IconButton color="error" size="small" onClick={() => onDelete(todo)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
