import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getWeatherIcon } from "@/utils/weatherIcon";

// types 
import type { Forecast } from "@/types/weather";
interface Props {
  forecast: Forecast[];
}

export default function WeatherForecast({ forecast }: Props) {
  const { i18n } = useTranslation();

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        margin: "5px",
      }}
    >
      
      {forecast.slice(0, 4).map((day) => (
        <Box key={day.date} className="text-center">
          <Typography variant="caption">
            {new Date(day.date).toLocaleDateString(
              i18n.language === "fa" ? "fa-IR" : "en-US",
              {
                weekday: "short",
              },
            )}
          </Typography>
          <p>{getWeatherIcon(day.weatherCode, 35)}</p>

          <Typography>{day.max}°</Typography>
        </Box>
      ))}
    </Stack>
  );
}
