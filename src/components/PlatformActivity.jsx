import React, { useState, useMemo } from "react";
// Added new icons for the Platform Activity section
import {
  Send,
  TrendingUp,
  Video,
  Trophy,
  Activity,
  ChevronRight,
  X,
  FileText,
  Users,
  BookOpen,
  Star,
  Calendar,
  Bell,
} from "lucide-react";

// --- Data Simulation (Constants) ---
// Data for the main dashboard (unchanged)
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

// Data for the new Platform Activity section
const activityData = [
  {
    icon: FileText,
    title: "Resumes Built",
    description: "Professional profiles created",
    count: 3,
    bgColor: "bg-[#3A0CA333]/20",
    textColor: "text-[#3A0CA3]",
    iconColor: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Mock Interviews",
    description: "Practice sessions completed",
    count: 7,
    bgColor: "bg-[#7209B733]",
    textColor: "text-[#7209B7]",
    iconColor: "text-purple-600",
  },
  {
    icon: Activity,
    title: "Career Sessions",
    description: "Counselling appointments",
    count: 2,
    bgColor: "bg-[#3A0CA333]/20",
    textColor: "text-[#3A0CA3]",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "Employer Ratings",
    description: "Company reviews submitted",
    count: 12,
    bgColor: "bg-[#7209B733]",
    textColor: "text-[#7209B7]",
    iconColor: "text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Training Sessions",
    description: "Skills development programs",
    count: 5,
    bgColor: "bg-blue-200",
    textColor: 'text-[#4361EE]',
    iconColor: "text-indigo-600",
  },
  {
    icon: Calendar,
    title: "Events Attended",
    description: "Networking & conferences",
    count: 4,
    bgColor: "bg-blue-200",
    textColor: 'text-[#4361EE]',
    iconColor: "text-purple-600",
  },
];

const notificationData = [
  {
    title: "Upcoming Training Session",
    details: "React Development Fundamentals starts in 2 hours",
    time: "2 hours",
  },
  {
    title: "Mock Interview Completed",
    details: "Your interview score: 85/100. View detailed feedback",
    time: "4 hours",
  },
  {
    title: "New Job Application",
    details: "Applied to Senior Developer at TechCorp Inc.",
    time: "1 day",
  },
  {
    title: "Career Session Booked",
    details: "Session with Dr. Sarah Johnson scheduled for tomorrow",
    time: "2 days",
  },
];

// --- New Platform Activity Component ---
const PlatformActivity = () => {
  return (
    <div className=" mx-auto max-w-[1200px] h-full">
      {/* Main Section Header */}
      <h2 className="ml-2 text-3xl font-bold text-gray-800 mb-6">
        Platform Activity
      </h2>

      {/* Platform Activity Cards and Notifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Platform Activity Summary (2/3 width) */}
        <div className="lg:col-span-2 p-6 rounded-xl shadow-xl bg-white">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Platform Activity Summary
            </h3>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 transition">
              <option>This Month</option>
              <option>Last Month</option>
              <option>All Time</option>
            </select>
          </div>

          {/* Activity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {activityData.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl shadow-md flex items-center justify-between ${item.bgColor}`}
              >
                <div className="flex items-center">
                  <item.icon className={`w-5 h-5 mr-3 ${item.iconColor}`} />
                  <div>
                    <p className={`font-semibold ${item.textColor} font-montserrat`}>{item.title}</p>
                    <p className={`text-xs text ${item.textColor}`}>{item.description}</p>
                  </div>
                </div>
                {/* Ensure badge has white text for contrast */}
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${item.iconColor.replace(
                    "text-",
                    "bg-"
                  )}`}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          {/* Total Platform Activity Bar */}
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-5 rounded-xl text-white shadow-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Total Platform Activity</p>
              <p className="text-sm text-indigo-200">
                Your engagement across all features
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-extrabold">33</p>
              <p className="text-sm font-medium text-indigo-200">
                Actions completed
              </p>
            </div>
          </div>
        </div>

        {/* Recent Notifications (1/3 width) */}
        <div className="lg:col-span-1 p-6 rounded-xl shadow-xl bg-white flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-red-500" />
              Recent Notifications
            </h3>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {notificationData.length}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Stay updated with your activities
          </p>

          {/* Notification List */}
          {/* Notification List */}
          <div className="shadow-md space-y-4 flex-grow">
            {notificationData.map((notification, index) => (
              <div
                key={index}
                className="shadow-md border border-gray-200 rounded-lg p-4 last:mb-0 bg-white"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-[#5B5B5B] font-montserrat">
                    {notification.title}
                  </p>
                  <span className="text-xs text-[#5B5B5B] font-monteserrat font-medium whitespace-nowrap">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-[#5B5B5B] font-montserrat">
                  {notification.details}
                </p>
              </div>
            ))}
          </div>

          {/* View All Notifications Button */}
          <button className="mt-6 w-full py-3 text-sm font-bold text-black border border-red-200 rounded-lg hover:bg-indigo-50 transition">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformActivity;
