import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/Home";
import TodosPage from "@/pages/Todos";

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
    ],
  },
]);

export default router;
