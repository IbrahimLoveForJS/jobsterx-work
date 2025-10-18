import React from "react"
import RegionDropdown from "./RegionDropdown"

export default function ResumeFormat({ country, setCountry }) {
  return (
    <section className="bg-white rounded-xl shadow-card p-6 sm:p-8 mb-6">
      {/* Header */}
      <h2 className="font-bold text-xl tracking-tight text-[#3A0CA3] font-montserrat">
        Resume Format by Country
      </h2>
      <p className="text-sm text-[#5B5B5B] mt-1 font-montserrat">
        Choose your target country to optimize resume format and required fields
      </p>

      {/* Layout */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1">
          <label className="text-lg font-semibold block mb-2 font-montserrat">
            Target Country/Region
          </label>
          <div className="w-[400px]">
            <RegionDropdown value={country} onChange={setCountry} />
          </div>

          {/* Cultural Notes Box */}
          <div className="mt-6 w-full border border-gray-300 rounded-xl p-5 bg-white shadow-sm">
            <div className="text-sm font-semibold mb-3 font-montserrat text-[#3A0CA3]">
              Cultural Notes for {country}:
            </div>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
              <li>No photo required - can be discriminatory</li>
              <li>Focus on achievements and quantified results</li>
              <li>Keep to 1–2 pages maximum</li>
              <li>Use action verbs and metrics</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-[260px] rounded-xl p-4 bg-transparent">
          <div className="text-sm font-semibold mb-3">Format Guidelines</div>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>
              <span className="font-semibold">Max Pages:</span> 2
            </li>
            <li>
              <span className="font-semibold">Photo Required:</span> No
            </li>
            <li>
              <span className="font-semibold">Personal Details:</span> Not needed
            </li>
            <li>
              <span className="font-semibold">Date Format:</span> MM/YYYY
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
