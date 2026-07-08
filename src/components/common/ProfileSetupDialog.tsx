import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface ProfileSetupDialogProps {
  open: boolean;
  onClose: () => void;
}


export default function ProfileSetupDialog({
  open,
  onClose,
}: ProfileSetupDialogProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleGoToSettings = () => {
    onClose();

    navigate("/settings");
  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >

      <DialogTitle>
        {t("profileDialog.title")}
      </DialogTitle>


      <DialogContent>
        <Typography>
          {t("profileDialog.description")}
        </Typography>
      </DialogContent>


      <DialogActions>

        <Button
          onClick={onClose}
          color="inherit"
        >
          {t("common.later")}
        </Button>


        <Button
          variant="contained"
          onClick={handleGoToSettings}
        >
          {t("profileDialog.goToSettings")}
        </Button>

      </DialogActions>

    </Dialog>
  );
}