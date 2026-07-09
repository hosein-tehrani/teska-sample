import { create } from "zustand";

import cities from "@/data/cities.json";

// types
import type { City } from "@/types/weather";
interface WeatherState {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
}

function getInitialCity(): City {
  const city = localStorage.getItem("selected_city");

  if (city) {
    return JSON.parse(city);
  }

  return cities[0] as City;
}
export const useWeatherStore = create<WeatherState>((set) => ({
  selectedCity: getInitialCity(),

  setSelectedCity: (city) => {
    localStorage.setItem("selected_city", JSON.stringify(city));

    set({
      selectedCity: city,
    });
  },
}));
