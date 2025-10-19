import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function DashboardCards() {
    const navigate = useNavigate();

  return (
  <div className="font-montserrat w-full mb-0">
    <div className="w-full">
      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Career Dashboard
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            Track your professional journey and job application progress
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition">
            QR CODE
          </button>
          <button onClick={() => navigate('/update-profile')} className="flex items-center gap-2 bg-white border border-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition">
            Update Profile
          </button>
          <button className="flex items-center gap-2 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
            Sign Out
          </button>
        </div>
      </div>

      {/* ===== TITLE ===== */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-5">
        Career Overview
      </h2>

      {/* ===== CARDS GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* ===== CARD 1: Total Experience ===== */}
        <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6 flex-wrap lg:flex-nowrap">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl flex-shrink-0">🕓</span>
              <p className="font-semibold text-sm md:text-base truncate">
                Total Experience
              </p>
            </div>
            <button className="text-xs md:text-sm bg-white text-black font-bold rounded-md whitespace-nowrap px-2 py-1 flex items-center gap-1">
              <CiLinkedin /> Share
            </button>
          </div>

          <div className="flex items-baseline justify-center gap-6 mb-4 mt-12">
            <div className="text-center">
              <h3 className="text-5xl lg:text-6xl font-extrabold leading-none">5</h3>
              <span className="text-sm md:text-base mt-1 inline-block">Years</span>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-white/70 self-center">•</div>
            <div className="text-center">
              <h3 className="text-5xl lg:text-6xl font-extrabold leading-none">8</h3>
              <span className="text-sm md:text-base mt-1 inline-block">Months</span>
            </div>
          </div>

          <div className="border-t border-white/20 pt-3 text-center">
            <p className="text-sm md:text-base mt-4">12,500 Total Hours</p>
          </div>
        </div>

        {/* ===== CARD 2: JobsterX Level ===== */}
        <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6 flex-wrap lg:flex-nowrap">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-lg flex-shrink-0">⚡</span>
              <p className="font-semibold text-sm md:text-base truncate">JobsterX Level</p>
            </div>
            <button className="text-xs md:text-sm bg-white text-black font-bold rounded-md whitespace-nowrap px-2 py-1 flex items-center gap-1">
              <CiLinkedin /> Share
            </button>
          </div>

          <div className="flex flex-col items-center">
            <span className="bg-[#5D4CFF] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3">Xecutor</span>
            <p className="text-4xl md:text-5xl font-bold mb-1">8%</p>
            <p className="text-sm md:text-base text-white/80 mb-3">Progress</p>
            <div className="w-full bg-white/60 h-2 md:h-3 rounded-full mb-3">
              <div className="w-[8%] h-full bg-[#4361EE] rounded-full" />
            </div>
            <p className="text-sm md:text-base text-white/80">Next: Xpecialist</p>
          </div>
        </div>

        {/* ===== CARD 3: Companies ===== */}
        <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">🏢</span>
            <p className="font-semibold text-sm md:text-base">Companies</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-bold">3</h3>
            <p className="text-sm md:text-base text-white/80 mb-4">Organizations</p>
            <div className="border-t border-white/20 pt-3">
              <p className="text-sm md:text-base">
                <span className="font-semibold text-lg md:text-xl">2.0</span> avg. tenure (years)
              </p>
            </div>
          </div>
        </div>

        {/* ===== CARD 4: Industries ===== */}
        <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">🏭</span>
            <p className="font-semibold text-sm md:text-base">Industries</p>
          </div>
          <div className="text-center mb-3">
            <h3 className="text-5xl lg:text-6xl font-bold">3</h3>
            <p className="text-sm md:text-base text-white/80">Sectors</p>
          </div>
          <div className="border-t border-white/20 pt-3 space-y-2">
            <div className="flex justify-between text-sm md:text-base">
              <p>Technology</p>
              <p className="font-semibold">60%</p>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <p>Finance</p>
              <p className="font-semibold">60%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
