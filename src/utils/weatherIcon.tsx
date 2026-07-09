import {
  AcUnit,
  Cloud,
  Grain,
  LightMode,
  Thunderstorm,
  WbCloudy,
} from "@mui/icons-material";
import type { ReactElement } from "react";

export function getWeatherIcon(
  code: number,
  size = 64,
): ReactElement {
  const props = { sx: { fontSize: size } };
  console.log("weathercode:", code);
  if (code === 0) return <LightMode {...props} />;
  if ([1].includes(code)) return <WbCloudy {...props} />;
  if ([2, 3].includes(code)) return <Cloud {...props} />;
  if ([45, 48].includes(code)) return <Grain {...props} />;
  if ([51, 53, 55, 56, 57].includes(code)) return <Grain {...props} />;
  if ([61, 63, 65, 66, 67].includes(code)) return <Grain {...props} />;
  if ([71, 73, 75, 77].includes(code)) return <AcUnit {...props} />;
  if ([80, 81, 82].includes(code)) return <Grain {...props} />;
  if ([85, 86].includes(code)) return <AcUnit {...props} />;
  if ([95, 96, 99].includes(code)) return <Thunderstorm {...props} />;
  return <Cloud {...props} />;
}
