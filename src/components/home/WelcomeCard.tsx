import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

import { useAppStore } from "@/store/appStore";
import { getGreeting } from "@/utils/greeting";

export default function WelcomeCard() {
  const { t, i18n } = useTranslation();

  const username = useAppStore((state) => state.username);

  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">{getGreeting(t)}</Typography>

            <Typography variant="h5">{username || t("home.guest")}</Typography>

            <Typography variant="h5">
              {now.toLocaleTimeString(i18n.language)}
            </Typography>

            <Typography variant="h6" color="text.secondary">
              {now.toLocaleDateString(i18n.language, {
                weekday: "long",
              })}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
  );
}
