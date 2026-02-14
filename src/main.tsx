import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Box } from "@chakra-ui/react";
<<<<<<< HEAD
=======
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
>>>>>>> develop

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
<<<<<<< HEAD
      <Box bg="white" minH="100vh">
        <App />
      </Box>
=======
      <RouterProvider router={router} />
>>>>>>> develop
    </Provider>
  </StrictMode>,
);
