import AddIcon from "@mui/icons-material/Add";

import {
  Fab,
} from "@mui/material";

interface AddTodoButtonProps {
  onClick: () => void;
}

export default function AddTodoButton({
  onClick,
}: AddTodoButtonProps) {
  return (
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
      }}
    >
      <AddIcon />
    </Fab>
  );
}