import ScrollToTop from "./components/ScrollToTop"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex bg-[#fbfbfd] min-h-screen">
      <ScrollToTop />

      {/* ===== Sidebar ===== */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r shadow-sm transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} isMobile />
      </div>

      {/* ===== Main Content ===== */}
      <div className="flex-1 flex flex-col">
        {/* ===== Mobile Header ===== */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <img src="/logo.png" alt="Logo" className="h-6" />
        </div>

        {/* ===== Page Content ===== */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
