import { FaSignOutAlt } from "react-icons/fa"
import { BsLightningChargeFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { MdOutlineInsertDriveFile } from "react-icons/md"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Build your Resume", path: "/build" },
    { label: "Home", path: "/" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
  ]

  return (
    <div className="w-72 min-h-screen bg-white border-r shadow-sm flex flex-col">
      {/* ===== Top Logo & Close ===== */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <img src="/logo.png" alt="Logo" className="h-6" />
        <IoMdClose className="text-xl cursor-pointer" />
      </div>

      {/* ===== Profile Section ===== */}
      <div className="flex flex-col items-center mt-4 px-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
        <h2 className="font-bold text-2xl text-gray-900 text-center">
          Sameer Saleem
        </h2>
        <div className="text-xs text-gray-600">sameer@jobsterx.com</div>

        <div className="flex gap-2 mt-2 text-sm">
          <button className="bg-blue-500 border-none font-medium px-4 py-1 text-white rounded-full">
            Premium
          </button>
          <button className="border font-medium px-5 py-1 text-xs text-gray-500 rounded-full flex gap-x-1 justify-center items-center">
            <span>Level</span>
            <span>Professional</span>
          </button>
        </div>

        {/* ===== Progress Bar ===== */}
        <div className="w-full mt-4">
          <div className="flex justify-between">
            <div className="text-xs text-gray-500 mb-1">Profile</div>
            <div className="text-xs text-blue-500 font-semibold mb-1">85%</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-purple-600 h-2 w-[85%] rounded-full" />
          </div>
        </div>

        {/* ===== Next Level ===== */}
        <div className="w-full mt-4">
          <div className="flex justify-between">
            <div className="text-xs text-gray-500 mb-1">Next Level</div>
            <div className="text-xs text-blue-500 font-semibold mb-1">
              Expert
            </div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-purple-600 h-2 w-[85%] rounded-full" />
          </div>
          <div className="flex justify-center mt-6 mb-5">
            <h1 className="text-sm text-purple-800">Activity Stats</h1>
          </div>
          <div className="h-px bg-gray-300 my-4"></div>
        </div>
      </div>

      {/* ===== Navigation ===== */}
      <div className="flex-1 mt-6 px-4 space-y-3 text-sm text-gray-800">
        {menuItems.map((item, i) => {
          const isActive = item.path && location.pathname === item.path

          return (
            <div
              key={i}
              onClick={() => item.path && navigate(item.path)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-blue-900 to-purple-700 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
            >
              <MdOutlineInsertDriveFile className="text-lg" />
              {item.label}
              {i === 5 && (
                <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </div>
          )
        })}
      </div>

      {/* ===== Upgrade Button ===== */}
      <div className="px-4 mt-8">
        <button className="flex justify-between px-3 w-full bg-gradient-to-r from-blue-900 to-purple-700 text-white py-2 rounded-md text-sm hover:bg-purple-800 transition">
          🎖 Streak
          <span className="text-white font-medium">7 days</span>
        </button>
      </div>

      {/* ===== Footer Section ===== */}
      <div className="text-xs text-center text-gray-500 mt-6 px-4 space-y-1 pb-6">
        <p>Member Since Jan 2016</p>
        <div className="flex items-center justify-center gap-2 text-red-600 cursor-pointer">
          <FaSignOutAlt />
          Sign out
        </div>
      </div>
    </div>
  )
}

export default Sidebar
