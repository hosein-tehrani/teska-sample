import { Outlet } from "react-router-dom";
import { useState } from "react";

import Box from "@mui/material/Box";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
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
