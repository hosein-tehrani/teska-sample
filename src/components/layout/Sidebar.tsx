import { NavLink } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { navigation } from "@/constants/navigation";
import { useTranslation } from "react-i18next";
import LanguageSection from "../settings/LanguageSection";

const drawerWidth = 260;
interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();
  const drawer = (
    <>
      <Toolbar>
        <Typography variant="h6" className="logo">
          TES<span>K</span>A
        </Typography>
      </Toolbar>

      <List sx={{ px: 1 }}>
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              sx={{
                borderRadius: 2,
                mb: 0.5,

                "&.active": {
                  bgcolor: "primary.main",
                  color: "#fff",

                  "& .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                },
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>

              <ListItemText primary={t(item.label)} />
            </ListItemButton>
          );
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <LanguageSection />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: {
          md: drawerWidth,
        },
        flexShrink: {
          md: 0,
        },
      }}
    >
      {isMobile ? (
        <Drawer
          open={mobileOpen}
          onClose={onClose}
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          open
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
}
