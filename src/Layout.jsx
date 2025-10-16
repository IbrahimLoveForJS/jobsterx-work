import ScrollToTop from "./components/ScrollToTop"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex bg-[#fbfbfd] min-h-screen">
    <ScrollToTop />
      {/* ===== Sidebar (full height, no scroll) ===== */}
      <div className="w-72 h-screen bg-white border-r shadow-sm flex-shrink-0">
        <Sidebar />
      </div>

      {/* ===== Main Content (scrollable only here) ===== */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}
