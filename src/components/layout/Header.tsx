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
  const language = useAppStore((state) => state.language);

  const setLanguage = useAppStore((state) => state.setLanguage);
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
        <Button onClick={toggleTheme}>
          {Ptheme === "dark" ? <Sunny /> : <Bedtime />}
        </Button>
        <Button onClick={() => setLanguage(language === "en" ? "fa" : "en")}>
          {language.toUpperCase()}
        </Button>
        <Box sx={{ flexGrow: 1 }} />

        {/* Theme */}

        {/* Language */}

        {/* Avatar */}
      </Toolbar>
    </AppBar>
  );
}
