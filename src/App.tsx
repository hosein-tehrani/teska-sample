import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "@/router";
import AppProviders from "@/providers/AppProviders";
function App() {
  return (
    <>
      <AppProviders>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AppProviders>
    </>
  );
}

export default App;
