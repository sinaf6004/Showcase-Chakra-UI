import Demo from "@/components/Demo";
import Layout from "@/components/PublicLayout";
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
    ],
  },
]);
