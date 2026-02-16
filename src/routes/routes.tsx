import Demo from "@/components/Demo";
import Layout from "@/components/PublicLayout";
import Games from "@/pages/Games";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // wrapper (navbar, footer, etc.)
    children: [
      {
        index: true, // same as path: "/"
        element: <Demo />,
      },
      {
        path: "/login", // same as path: "/"
        element: <LoginPage />,
      },
      {
        path: "/games", // same as path: "/"
        element: <Games />,
      },
    ],
  },
]);
