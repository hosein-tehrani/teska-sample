import {
  AcUnit,
  Cloud,
  Grain,
  LightMode,
  Thunderstorm,
  WbCloudy,
} from "@mui/icons-material";
import type { ReactElement } from "react";

interface WeatherIconProps {
  code: number;
  size?: number;
}

export function getWeatherIcon({
  code,
  size = 64,
}: WeatherIconProps): ReactElement {
  const props = {
    sx: {
      fontSize: size,
    },
  };

  if (code === 0) {
    return <LightMode {...props} />;
  }

  if ([1, 2].includes(code)) {
    return <WbCloudy {...props} />;
  }

  if (code === 3) {
    return <Cloud {...props} />;
  }

  if ([45, 48].includes(code)) {
    return <Cloud {...props} />;
  }

  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return <Grain {...props} />;
  }

  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
    return <AcUnit {...props} />;
  }

  if (code >= 95) {
    return <Thunderstorm {...props} />;
  }

  return <Cloud {...props} />;
}
