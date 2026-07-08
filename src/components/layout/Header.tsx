import { useAppStore } from "@/store/appStore";
import { MenuRounded, Sunny, Bedtime } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const theme = useTheme();
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const Ptheme = useAppStore((state) => state.theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      color="inherit"
      elevation={0}
      position="sticky"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuRounded />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Button onClick={toggleTheme}>
          {Ptheme === "dark" ? <Sunny /> : <Bedtime />}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
