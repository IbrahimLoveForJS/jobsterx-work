import React, { useState, useMemo } from "react";
import {
  Send,
  TrendingUp,
  Video,
  Trophy,
  Activity,
  ChevronRight,
  X,
} from "lucide-react";

// --- Main Application Component ---
const App = () => {
  // --- Data Simulation (Inlined) ---
  const dashboardData = {
    status: true, // Active/Inactive
    stats: [
      {
        icon: Send,
        value: 147,
        label: "Applications Sent",
        subText: "Last 2 hours ago",
        color: "text-indigo-600",
      },
      {
        icon: TrendingUp,
        value: "23%",
        label: "Response Rate",
        subText: "Above industry avg",
        color: "text-indigo-600",
      },
      {
        icon: Video,
        value: 12,
        label: "Interviews Scheduled",
        subText: "This month",
        color: "text-indigo-600",
      },
      {
        icon: Trophy,
        value: 3,
        label: "Offers Received",
        subText: "Pending review",
        color: "text-indigo-600",
      },
    ],
    successRate: 23, // 23%
    dailyGoal: { current: 15, total: 20 },
  };

  const [isActive, setIsActive] = useState(dashboardData.status);

  // Calculate specific progress values
  const successRateProgress = dashboardData.successRate;
  const dailyGoalProgress = useMemo(
    () =>
      (dashboardData.dailyGoal.current / dashboardData.dailyGoal.total) * 100,
    [dashboardData.dailyGoal.current, dashboardData.dailyGoal.total]
  );

  // Custom button class for the vibrant pink style
  const buttonClass =
    "w-full py-4 px-6 text-white font-bold rounded-xl shadow-xl transition transform duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Header Section (Visible in both Active and Inactive states) */}
        <header className="p-6 sm:p-8 bg-gradient-to-r from-indigo-800 to-purple-700 text-white rounded-t-xl">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                Auto Job Application System
              </h1>
              <p className="text-indigo-200 text-sm font-medium">
                AI-powered automation applying to relevant positions 24/7
              </p>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-semibold uppercase tracking-wider">
                STATUS
              </span>
              <span className="font-bold text-lg">
                {isActive ? "Active" : "Inactive"}
              </span>
              <button
                onClick={() => setIsActive(!isActive)}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isActive ? "bg-white" : "bg-indigo-300"
                }`}
                aria-checked={isActive}
                role="switch"
              >
                <div
                  className={`bg-purple-600 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isActive ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area - Conditional Rendering */}
        <div className="p-6 sm:p-8">
          {isActive ? (
            <>
              {/* --- ACTIVE STATE CONTENT --- */}
              {/* Stats Grid (Inlined StatCard JSX) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      {/* Using stat.icon directly as a component */}
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-lg font-medium text-gray-700 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500">{stat.subText}</p>
                  </div>
                ))}
              </div>

              {/* Progress / Goals Section (Inlined ProgressCard JSX) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Application Success Rate Card */}
                <div className="p-6 bg-white rounded-xl shadow-lg col-span-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    {/* Stylized Check/Activity Icon (the 'C' logo in the image) */}
                    <div className="p-2 mr-3 rounded-full bg-indigo-100">
                      <Activity className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">
                      Application Success Rate
                    </p>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${successRateProgress}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">{`${successRateProgress}% of applications receive responses`}</p>
                </div>

                {/* Daily Application Goal Card */}
                <div className="p-6 bg-white rounded-xl shadow-lg col-span-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    {/* Stylized Check/Activity Icon (the 'C' logo in the image) */}
                    <div className="p-2 mr-3 rounded-full bg-indigo-100">
                      <Activity className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">
                      Daily Application Goal
                    </p>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${dailyGoalProgress}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">{`${dashboardData.dailyGoal.current} of ${dashboardData.dailyGoal.total} daily applications completed`}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  className={`${buttonClass} bg-pink-600 hover:bg-pink-700 shadow-pink-300/50`}
                >
                  View All Applications
                </button>

                <button
                  className={`${buttonClass} bg-pink-600 hover:bg-pink-700 shadow-pink-300/50`}
                >
                  Configure Preferences
                </button>
              </div>
            </>
          ) : (
            /* --- INACTIVE STATE CONTENT --- */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              {/* Disabled Icon */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                  <X className="w-8 h-8 text-gray-500" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-black mb-3 font-montserrat">
                Auto-Apply is Currently Disabled
              </h2>
              <p className="text-[#5B5B5B] max-w-md mb-8 font-montserrat font-medium">
                Enable the auto-apply feature to let our AI apply to relevant
                jobs on your behalf automatically
              </p>

              {/* Button to re-enable */}
              <button
                onClick={() => setIsActive(true)}
                className={`${buttonClass} bg-pink-600 hover:bg-pink-700 shadow-pink-300/50 max-w-xs`}
              >
                Enable Auto-Apply Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
