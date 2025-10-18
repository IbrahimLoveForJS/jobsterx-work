// ...existing code...
import React from "react";
import { CiLinkedin } from "react-icons/ci";

export default function DashboardCards() {
  return (
    <div className="font-montserrat min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Career Dashboard
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Track your professional journey and job application progress
            </p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              aria-label="QR Code"
              className="flex items-center gap-2 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="5" height="5" fill="currentColor" />
                <rect x="10" y="3" width="11" height="5" fill="currentColor" />
                <rect x="3" y="10" width="5" height="11" fill="currentColor" />
                <rect x="10" y="10" width="3" height="3" fill="white" />
              </svg>
              QR CODE
            </button>

            <button
              aria-label="Update Profile"
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 12h-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20v-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Update Profile
            </button>

            <button
              aria-label="Sign out"
              className="flex items-center gap-2 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 17l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12H9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 19H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sign Out
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          Career Overview
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-x-2">
                <span className="text-sm">🕓</span>
                <p className="font-semibold text-xs">Total Experience</p>
              </div>
              <button className="text-[10px] bg-white text-black font-bold rounded-lg">
                Share on LinkedIn
              </button>
            </div>

            <div className="flex items-baseline justify-center gap-4 mb-4">
              <div className="text-center">
                <h3 className="text-5xl font-extrabold leading-none">5</h3>
                <span className="text-sm inline-block mt-1">Years</span>
              </div>

              <div className="text-3xl font-bold text-white/70 self-center">
                •
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-extrabold leading-none">8</h3>
                <span className="text-sm inline-block mt-1">Months</span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-3 text-center">
              <p className="text-sm">12,500 Total Hours</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <p className="font-semibold">JobsterX Level</p>
              </div>

              <button
                aria-label="Share JobsterX Level"
                className="text-xs bg-white/20 px-2 py-1 rounded-full"
              >
                Share on LinkedIn
              </button>
            </div>

            <div className="flex flex-col items-center">
              <span className="bg-[#5D4CFF] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Xecutor
              </span>

              <p className="text-4xl font-bold mb-1">8%</p>
              <p className="text-sm text-white/80 mb-3">Progress</p>

              <div className="w-full bg-white/20 h-2 rounded-full mb-3">
                <div className="w-[8%] h-full bg-white rounded-full" />
              </div>

              <p className="text-sm text-white/80">Next: Xpecialist</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🏢</span>
              <p className="font-semibold">Companies</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold">3</h3>
              <p className="text-sm text-white/80 mb-4">Organizations</p>

              <div className="border-t border-white/20 pt-3">
                <p className="text-sm">
                  <span className="font-semibold text-lg">2.0</span> avg. tenure
                  (years)
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#3D0CA8] text-white p-6 rounded-2xl shadow-lg relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🏭</span>
              <p className="font-semibold">Industries</p>
            </div>

            <div className="text-center mb-3">
              <h3 className="text-5xl font-bold">3</h3>
              <p className="text-sm text-white/80">Sectors</p>
            </div>

            <div className="border-t border-white/20 pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <p>Technology</p>
                <p className="font-semibold">60%</p>
              </div>
              <div className="flex justify-between text-sm">
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
// ...existing code...
