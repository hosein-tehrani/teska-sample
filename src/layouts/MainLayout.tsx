import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useAppStore } from "@/store/appStore";
import ProfileSetupDialog from "@/components/common/ProfileSetupDialog";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const username = useAppStore((state) => state.username);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  useEffect(() => {
    if (!username.trim()) {
      setShowProfileDialog(true);
    }
  }, [username]);
  return (
    <Box sx={{ display: "flex" }}>
      <ProfileSetupDialog
        open={showProfileDialog}
        onClose={() => setShowProfileDialog(false)}
      />
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header onMenuClick={() => setMobileOpen(true)} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
