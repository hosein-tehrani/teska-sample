import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import { useAppStore } from "@/store/appStore";

export default function ThemeSection() {
  const { t } = useTranslation();

  const theme = useAppStore((state) => state.theme);

  const toggleTheme = useAppStore((state) => state.toggleTheme);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">{t("settings.appearance")}</Typography>

          <FormControlLabel
            control={
              <Switch checked={theme === "dark"} onChange={handleChange} />
            }
            label={
              theme === "dark"
                ? t("settings.darkMode")
                : t("settings.lightMode")
            }
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
