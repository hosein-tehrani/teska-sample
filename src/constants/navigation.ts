import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";

import type { SvgIconComponent } from "@mui/icons-material";

export interface NavigationItem {
  label: string;
  path: string;
  icon: SvgIconComponent;
}

export const navigation: NavigationItem[] = [
  {
    label: "sidebar.home",
    path: "/",
    icon: HomeRoundedIcon,
  },
  {
    label: "sidebar.todos",
    path: "/todos",
    icon: ChecklistRoundedIcon,
  },
];
