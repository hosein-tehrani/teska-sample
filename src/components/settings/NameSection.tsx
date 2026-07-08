import { useEffect, useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useAppStore } from "@/store/appStore";

export default function NameSection() {
  const { t } = useTranslation();

  const username = useAppStore((state) => state.username);
  const setUsername = useAppStore((state) => state.setUsername);

  const [value, setValue] = useState<string>(username);

  useEffect(() => {
    setValue(username);
  }, [username]);

  const handleSave = () => {
    const trimmed = value.trim();

    if (!trimmed) {
      toast.error(t("settings.nameRequired"));
      return;
    }

    setUsername(trimmed);

    toast.success(t("settings.profileUpdated"));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          gutterBottom
        >
          {t("settings.profile")}
        </Typography>

        <Stack spacing={2}>

          <TextField
            fullWidth
            label={t("settings.name")}
            value={value}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            onClick={handleSave}
          >
            {t("common.save")}
          </Button>

        </Stack>

      </CardContent>
    </Card>
  );
}