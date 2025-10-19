import { X } from "lucide-react";
import React, { useState } from "react";

// --- Step Content Components ---

// Renders the content for Step 1: Personal Information
export const Steps = () => (
  <div className="space-y-6 p-6">
    <h2 className="text-xl font-semibold text-gray-800">
      Personal Information
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Name */}
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          defaultValue="John"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* Last Name */}
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          defaultValue="Doe"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* Email Address */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          defaultValue="john.doe@example.com"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* Phone Number */}
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          defaultValue="+1 (555) 123-4567"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* Current Location */}
      <div className="flex flex-col">
        <label
          htmlFor="location"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Current Location
        </label>
        <input
          id="location"
          type="text"
          defaultValue="San Francisco, CA"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* LinkedIn Profile */}
      <div className="flex flex-col">
        <label
          htmlFor="linkedin"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          LinkedIn Profile
        </label>
        <input
          id="linkedin"
          type="url"
          defaultValue="https://linkedin.com/in/johndoe"
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      {/* Professional Summary (Full Width) */}
      <div className="flex flex-col md:col-span-2">
        <label
          htmlFor="summary"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Professional Summary
        </label>
        <textarea
          id="summary"
          rows="4"
          defaultValue="Brief overview of your professional background and career goals."
          className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-none"
        ></textarea>
      </div>
    </div>
  </div>
);

// Renders the content for Step 2: Work Experience (Mock)
export const WorkExperienceStep = () => {
  const [isCurrent, setIsCurrent] = useState(false); // State for "Currently working here" checkbox

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-purple-800">
          Work Experience
        </h2>
        <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-pink-500 transition" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="flex flex-col">
          <label
            htmlFor="companyName"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Company Name"
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        {/* Position */}
        <div className="flex flex-col">
          <label
            htmlFor="position"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Position
          </label>
          <input
            id="position"
            type="text"
            placeholder="Job Title"
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        {/* Start Date */}
        <div className="flex flex-col">
          <label
            htmlFor="startDate"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            placeholder="Select Start Date"
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
          />
        </div>
        {/* End Date / Currently Working */}
        <div className="flex flex-col">
          <label
            htmlFor="endDate"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            placeholder="Select End Date"
            disabled={isCurrent}
            className={`p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500 ${
              isCurrent ? "bg-gray-100 cursor-not-allowed" : "bg-white"
            }`}
          />
          <div className="flex items-center mt-2">
            <input
              id="currentJob"
              type="checkbox"
              checked={isCurrent}
              onChange={(e) => setIsCurrent(e.target.checked)}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label htmlFor="currentJob" className="ml-2 text-sm text-gray-600">
              Currently working here
            </label>
          </div>
        </div>
        {/* Company Website */}
        <div className="flex flex-col">
          <label
            htmlFor="companyWebsite"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Company Website
          </label>
          <input
            id="companyWebsite"
            type="url"
            placeholder="www.website.com"
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        {/* Company Industry */}
        <div className="flex flex-col">
          <label
            htmlFor="companyIndustry"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Company Industry
          </label>
          <select
            id="companyIndustry"
            defaultValue="Logistic"
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white pr-8"
          >
            <option value="Logistic">Logistic</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
        {/* Job Description (Full Width) */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="jobDescription"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Job Description
          </label>
          <textarea
            id="jobDescription"
            rows="4"
            placeholder="Describe your responsibilities and achievements."
            className="p-3 border border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-none"
          ></textarea>
        </div>
      </div>

      {/* Add Another Experience Button (Full Width) */}
      <div className="pt-4 md:col-span-2">
        <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition">
          + Add Another Experience
        </button>
      </div>
    </div>
  );
};

// --- Step Configuration ---

// Helper component to render Lucide icons based on string name
export const Icon = ({ name, className }) => {
  switch (name) {
    case "user":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.995l-7.567-3.693a2 2 0 0 0-1.666 0L2.597 8.927A1 1 0 0 0 2 9.924V14a1 1 0 0 0 .598.924l7.567 3.693a2 2 0 0 0 1.666 0l7.567-3.693A1 1 0 0 0 22 14v-4.076a1 1 0 0 0-.58-.922z" />
          <path d="M8 3v16" />
          <path d="M12 21V6.5" />
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "award":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.46 16.29a5 5 0 0 1-5.92 0" />
          <path d="M12 22l-1.5-3-1.5 3" />
          <path d="M12 22l1.5-3 1.5 3" />
        </svg>
      );
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.43.51a2 2 0 0 0 .73 2.73l.43.25a2 2 0 0 1 0 3.46l-.43.25a2 2 0 0 0-.73 2.73l.43.51a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.43-.51a2 2 0 0 0-.73-2.73l-.43-.25a2 2 0 0 1 0-3.46l.43-.25a2 2 0 0 0 .73-2.73l-.43-.51a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return <div className={className}>?</div>;
  }
};
