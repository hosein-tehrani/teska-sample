import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import type { SvgIconComponent } from "@mui/icons-material";

export interface NavigationItem {
  label: string;
  path: string;
  icon: SvgIconComponent;
}

export const navigation: NavigationItem[] = [
  {
    label: "home",
    path: "/",
    icon: HomeRoundedIcon,
  },
  {
    label: "todos",
    path: "/todos",
    icon: ChecklistRoundedIcon,
  },
  {
    label: "weather",
    path: "/weather",
    icon: WbSunnyRoundedIcon,
  },
  {
    label: "settings",
    path: "/settings",
    icon: SettingsRoundedIcon,
  },
];