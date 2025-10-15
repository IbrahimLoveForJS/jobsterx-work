import React from "react"

export default function ResumeProgress() {
  const completion = 85

  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        {/* Left side */}
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-[#4b1e8b]">
            Your Resume Progress
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Complete all sections for best ATS compatibility
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap gap-2">
          <button className="text-xs sm:text-sm px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition">
            Preview Resume
          </button>
          <button className="text-xs sm:text-sm px-3 py-1 bg-[#6A21D5] text-white rounded hover:bg-[#5a1bc0] transition">
            Generate Resume
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div>
            Completion:{" "}
            <span className="font-semibold text-gray-700">{completion}%</span>
          </div>
        </div>

        <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-[#6A21D5] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${completion}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            Personal Info
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            Experience
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            Education
          </div>
        </div>
      </div>
    </section>
  )
}
