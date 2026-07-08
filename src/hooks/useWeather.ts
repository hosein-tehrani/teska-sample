import { useQuery } from "@tanstack/react-query";

import { getWeather } from "@/services/weatherService";

export const useWeather = (
  latitude: number,
  longitude: number,
) =>
  useQuery({
    queryKey: [
      "weather",
      latitude,
      longitude,
    ],

    queryFn: () =>
      getWeather(
        latitude,
        longitude,
      ),

    enabled:
      !!latitude &&
      !!longitude,

    staleTime:
      1000 * 60 * 10,

    gcTime:
      1000 * 60 * 30,

    retry: 1,

    refetchOnWindowFocus: false,
  });