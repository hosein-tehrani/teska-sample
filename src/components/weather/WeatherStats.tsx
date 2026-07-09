import { Air, WaterDrop, Thermostat } from "@mui/icons-material";

import { Box, Stack, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import type { Weather } from "@/types/weather";

interface Props {
  weather: Weather;
}

export default function WeatherStats({ weather }: Props) {
  const { t } = useTranslation();

  const items = [
    {
      label: t("weather.max"),
      value: `${weather.max}°`,
      icon: <Thermostat />,
    },

    {
      label: t("weather.min"),
      value: `${weather.min}°`,
      icon: <Thermostat />,
    },

    {
      label: t("weather.wind"),
      value: `${weather.windSpeed} km/h`,
      icon: <Air />,
    },

    {
      label: t("weather.humidity"),
      value: `${weather.humidity}%`,
      icon: <WaterDrop />,
    },
  ];

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        margin: "5px"
      }}
    >
      {items.map((item) => (
        <Box key={item.label} className="text-center">
          <Box color="primary.main"></Box>

          <Typography variant="caption" color="text.secondary">
            {item.label}
          </Typography>

          <Typography>{item.value}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
