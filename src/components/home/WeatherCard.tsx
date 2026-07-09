import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { useWeather } from "@/hooks/useWeather";
import { useWeatherStore } from "@/store/weatherStore";
import CityAutocomplete from "../weather/CityAutocomplete";
import { getWeatherIcon } from "@/utils/weatherIcon";
import { getWeatherDescription } from "@/utils/weatherDescription";
export default function WeatherCard() {
  const { t } = useTranslation();
  const city = useWeatherStore((state) => state.selectedCity);
  const { data, isLoading, error } = useWeather(city.latitude, city.longitude);
  console.log(data);
  return (
    <Card>
      <CardContent>
        <CityAutocomplete />
        <Divider sx={{ my: 3 }} />

        {isLoading && (
          <p className="text-center mx-auto">
            <CircularProgress aria-label="Loading…" />
          </p>
        )}
        {!isLoading && error && (
          <Alert severity="error">{t("weather.error")}</Alert>
        )}

        {!isLoading && data && (
          <Box>
            <Typography variant="h4" className="text-center">
              {data.temperature}°
            </Typography>
            <p className="text-center mx-auto">
              {getWeatherIcon(data.weatherCode)}
            </p>

            <Typography className="text-center">
              {getWeatherDescription(data.weatherCode, t)}
            </Typography>

            <Stack direction="row" className="mt-4 space-between"></Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
