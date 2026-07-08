import { fetchWeather } from "@/api/weatherApi";
import { type Weather } from "@/types/weather";

export const getWeather = async (
  lat: number,
  lng: number,
): Promise<Weather> => {
  const data = await fetchWeather(
    lat,
    lng,
  );

  return {
    temperature:
      data.current.temperature_2m,

    humidity:
      data.current.relative_humidity_2m,

    windSpeed:
      data.current.wind_speed_10m,

    weatherCode:
      data.current.weather_code,

    forecast:
      data.daily.time
        .slice(1)
        .map((date, index) => ({
          date,

          weatherCode:
            data.daily.weather_code[
              index + 1
            ],

          max:
            data.daily.temperature_2m_max[
              index + 1
            ],

          min:
            data.daily.temperature_2m_min[
              index + 1
            ],
        })),
  };
};