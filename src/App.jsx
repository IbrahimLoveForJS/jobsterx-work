import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ResumePreview from "./pages/ResumePreview";
import ScrollToTop from "./components/ScrollToTop";
import Loaders from "./components/Loaders";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";

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
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/update-profile',
          element: <UpdateProfile />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  ) 
    
}
