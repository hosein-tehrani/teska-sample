import { useTranslation } from "react-i18next";

import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { useAppStore, type Language } from "@/store/appStore";

export default function LanguageSection() {
  const { t } = useTranslation();

  const language = useAppStore((state) => state.language);

  const setLanguage = useAppStore((state) => state.setLanguage);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    value: Language | null,
  ) => {
    if (!value || value === language) {
      return;
    }

    setLanguage(value);
  };

  return (
    <Stack spacing={2} sx={{ px: 3, mb: 3 }}>
      <Typography variant="body1">{t("settings.language")}</Typography>

      <ToggleButtonGroup
        size="small"
        exclusive
        value={language}
        onChange={handleChange}
      >
        <ToggleButton value="en">{t("settings.english")}</ToggleButton>

        <ToggleButton value="fa">{t("settings.persian")}</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
