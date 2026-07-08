import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

import WelcomeCard from "@/components/home/WelcomeCard";
import NameSection from "@/components/settings/NameSection";
import WeatherCard from "@/components/home/WeatherCard";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <WelcomeCard />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t("settings.profile")}
              </Typography>
              <NameSection />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <WeatherCard />
        </Grid>
      </Grid>
    </Container>
  );
}
