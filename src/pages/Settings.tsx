import {
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import NameSection from "@/components/settings/NameSection";
import ThemeSection from "@/components/settings/ThemeSection";
import LanguageSection from "@/components/settings/LanguageSection";


export default function SettingsPage() {
  const { t } = useTranslation();


  return (
    <Container maxWidth="md">

      <Stack spacing={3}>

        <Typography
          variant="h4"
        >
          {t("settings.title")}
        </Typography>


        <NameSection />

        <ThemeSection />

        <LanguageSection />

      </Stack>

    </Container>
  );
}