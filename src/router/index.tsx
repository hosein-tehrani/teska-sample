import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/Home";
import TodosPage from "@/pages/Todos";
import WeatherPage from "@/pages/Weather";
import SettingsPage from "@/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "todos",
        element: <TodosPage />,
      },
      {
        path: "weather",
        element: <WeatherPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;