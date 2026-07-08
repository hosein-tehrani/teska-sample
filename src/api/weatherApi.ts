import axios from "axios";
import type { WeatherResponse } from "@/types/weather";

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export const fetchWeather = async (latitude: number, longitude: number) => {
  const { data } = await weatherApi.get<WeatherResponse>("/forecast", {
    params: {
      latitude,

      longitude,

      current: [
        "temperature_2m",

        "relative_humidity_2m",

        "weather_code",

        "wind_speed_10m",
      ].join(","),

      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(
        ",",
      ),

      forecast_days: 5,

      timezone: "auto",
    },
  });

  return data;
};
