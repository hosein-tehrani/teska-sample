export interface City {
  id: number;
  nameFa: string;
  nameEn: string;
  latitude: number;
  longitude: number;
}

export interface Forecast  {
  date: string;
  weatherCode: number;
  max: number;
  min: number;
}

export interface WeatherResponse {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
    relative_humidity_2m: number;
  };

  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

export interface Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  forecast: Forecast[];
}
