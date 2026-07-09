import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import cities from "@/data/cities.json";
import { useWeatherStore } from "@/store/weatherStore";
// types 
import type { City } from "@/types/weather";

export default function CityAutocomplete() {
  const { t, i18n } = useTranslation();

  const selectedCity = useWeatherStore(
    (state) => state.selectedCity,
  );

  const setSelectedCity = useWeatherStore(
    (state) => state.setSelectedCity,
  );

  return (
    <Autocomplete<City>
      options={cities as City[]}
      value={selectedCity}
      onChange={(_, city) => {
        if (city) {
          setSelectedCity(city);
        }
      }}
      getOptionLabel={(city) =>
        i18n.language === "fa"
          ? city.nameFa
          : city.nameEn
      }
      isOptionEqualToValue={(option, value) =>
        option.id === value.id
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("weather.city")}
        />
      )}
    />
  );
}