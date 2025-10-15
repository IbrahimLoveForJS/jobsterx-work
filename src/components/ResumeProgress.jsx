import React from "react";

export default function ResumeProgress() {
  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#4b1e8b]">
            Your Resume Progress
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Complete all sections for best ATS compatibility
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm px-3 py-1 border border-gray-200 rounded">
            Preview Resume
          </button>
          <button className="text-sm px-3 py-1 bg-brand-500 text-white rounded">
            Generate Resume
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div>
            Completion: <span className="font-semibold text-gray-700">85%</span>
          </div>
        </div>

        <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-[#6A21D5] rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />{" "}
            Personal Info
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />{" "}
            Experience
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-300" />{" "}
            Education
          </div>
        </div>
      </div>
    </section>
  );
}
