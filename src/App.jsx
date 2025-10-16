import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ResumePreview from "./components/ResumePreview";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/build",
          element: <ResumePreview />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  ) 
    
}
