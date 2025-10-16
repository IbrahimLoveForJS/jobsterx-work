
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout'
import Home from "./components/Home";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}
