import { FaSignOutAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ onClose, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Dashboard", path: '/dashboard'},
    { label: "Home", path: "/" },
    { label: "Loaders", path: "/loaders" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
  ];

  return (
    <div className="w-72 sticky top-0 h-screen bg-white border-r shadow-xl flex flex-col overflow-y-auto">
      {/* ===== Top Logo & Close ===== */}
      <div className="flex justify-between items-center px-4 py-3 border-b bg-[#3A0CA3]">
        <img src="/logo.png" alt="Logo" className="h-6 text-white " />
        {isMobile && (
          <IoMdClose className="text-2xl cursor-pointer" onClick={onClose} />
        )}
      </div>

      {/* ===== Profile Section ===== */}
      <div className="flex flex-col items-center mt-4 px-4">
        <div className="w-24 h-24 rounded-full bg-[#5B5B5B] mb-2" />
        <h2 className="font-bold text-2xl text-gray-900 text-center font-montserrat">
          Sameer Saleem
        </h2>
        <div className="text-xs text-gray-600 font-montserrat font-medium">
          sameer@jobsterx.com
        </div>

        <div className="flex gap-2 mt-2 text-sm">
          <button className="bg-[#4361EE] font-montserrat font-semibold px-3 py-1 text-white rounded-full">
            Premium
          </button>
          <button className="border px-3 py-1 text-xs text-[#5B5B5B] font-montserrat font-bold rounded-full flex gap-x-1 justify-center items-center">
            <span>Level</span>
            <span>Professional</span>
          </button>
        </div>

        {/* ===== Progress Bars ===== */}
        <div className="w-full mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-montserrat text-[#5B5B5B] font-medium">
              Profile
            </span>
            <span className="text-blue-500 font-semibold">85%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 w-[85%] rounded-full"
              style={{
                background: "linear-gradient(90deg, #3A0CA3 70%, #7209B7 100%)",
              }}
            />
          </div>

          <div className="flex justify-between text-xs mt-4 mb-1">
            <span className="font-montserrat text-[#5B5B5B] font-medium">
              Next Level
            </span>
            <span className="text-blue-500 font-semibold">Expert</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 w-[75%] rounded-full"
              style={{
                background: "linear-gradient(90deg, #3A0CA3 70%, #7209B7 100%)",
              }}
            />
          </div>

          <div className="flex justify-center mt-6 mb-5">
            <h1 className="text-sm font-montsarret text-[#3A0CA3]">
              Activity Stats
            </h1>
          </div>
          <div className="h-px bg-gray-300 my-4"></div>
        </div>
      </div>

      {/* ===== Navigation ===== */}
      <div className="flex-1 mt-6 px-4 space-y-3 text-sm text-gray-800">
        {menuItems.map((item, i) => {
          const isActive = item.path && location.pathname === item.path;

          return (
            <div
              key={i}
              onClick={() => {
                if (item.path) navigate(item.path);
                if (isMobile && onClose) onClose();
              }}
              className={`font-montserrat font-medium flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
                isActive
                  ? "text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(90deg, #3A0CA3 70.19%, #7209B7 100%)",
                    }
                  : {}
              }
            >
              <MdOutlineInsertDriveFile className="text-lg" />
              {item.label}
              {i === 5 && (
                <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Footer ===== */}
      <div className="px-4 mt-8">
        <button
          className="font-semibold px-4 flex justify-between w-full text-white py-2 rounded-md text-sm transition font-montserrat"
          style={{
            background: "linear-gradient(90deg, #3A0CA3 70.19%, #7209B7 100%)",
          }}
        >
          🎖 Streak <span className="font-semibold">7 days</span>
        </button>
      </div>

      <div className="text-xs text-center text-gray-500 mt-6 px-4 space-y-1 pb-6">
        <p>Member Since Jan 2016</p>
        <div className="flex items-center justify-center gap-2 text-red-600 cursor-pointer">
          <FaSignOutAlt />
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
