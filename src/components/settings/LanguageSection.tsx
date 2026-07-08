import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { useAppStore, type Language } from "@/store/appStore";


export default function LanguageSection() {
  const { t } = useTranslation();

  const language = useAppStore(
    (state) => state.language
  );

  const setLanguage = useAppStore(
    (state) => state.setLanguage
  );


  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    value: Language | null
  ) => {
    if (!value || value === language) {
      return;
    }

    setLanguage(value);
  };


  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <Stack spacing={2}>

          <Typography
            variant="h6"
          >
            {t("settings.language")}
          </Typography>


          <ToggleButtonGroup
            exclusive
            value={language}
            onChange={handleChange}
          >

            <ToggleButton value="en">
              {t("settings.english")}
            </ToggleButton>


            <ToggleButton value="fa">
              {t("settings.persian")}
            </ToggleButton>

          </ToggleButtonGroup>


        </Stack>

      </CardContent>
    </Card>
  );
}