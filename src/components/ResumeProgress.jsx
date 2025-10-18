import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResumeProgress() {
  const completion = 85;
  const navigate = useNavigate()

  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        {/* Left side */}
        <div>
          <h2 className="text-base sm:text-xl font-bold text-[#3A0CA3] font-montserrat">
            Your Resume Progress
          </h2>
          <p className="text-[10px] text-[#5B5B5B] sm:text-sm font-montserrat mt-1">
            Complete all sections for best ATS compatibility
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap gap-2">
          <button onClick={() => navigate('/build')} className="gap-x-2 flex items-center bg-[#4361EE] font-montserrat text-white font-medium rounded-lg  text-xs sm:text-sm px-3 py-2 border border-gray-200 hover:bg-gray-50 transition">
            <span>
              <FaRegEye />
            </span>
            Preview Resume
          </button>
          <button className="gap-x-2 flex items-center py-2 bg-[#3A0CA3] text-xs sm:text-sm px-3 rounded-lg font-medium text-white font-montserrat hover:bg-[#5a1bc0] transition">
            <span>
              <FaRegEdit />
            </span>
            Generate Resume
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="text-[#3A0CA3] font-montserrat font-medium text-md mt-2 mb-2">
            Completion:{" "}
            <span className="font-medium font-montserrat text-[#3A0CA3]">
              {completion}%
            </span>
          </div>
        </div>

        <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-[#3A0CA3] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${completion}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border  border-gray-300" />
            <h2 className="text-[#3A0CA3] font-semibold font-montserrat">
              Personal Info
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            <h2 className="text-[#3A0CA3] font-semibold font-montserrat">
              Experience
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            <h2 className="text-[#3A0CA3] font-semibold font-montserrat">
              Education
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
