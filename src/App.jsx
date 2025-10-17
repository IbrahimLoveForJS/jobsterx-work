import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ResumePreview from "./components/ResumePreview";
import ScrollToTop from "./components/ScrollToTop";
import Loaders from "./components/Loaders";

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
        {
          path: '/loaders',
          element: <Loaders />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  ) 
    
}
