import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";


function Layout() {

  return (
    <div className="flex bg-[#fbfbfd] min-h-screen">
      <Sidebar />     
      <Outlet />
    </div>
  );
}

export default Layout;
