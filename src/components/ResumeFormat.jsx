import React from "react";
import RegionDropdown from "./RegionDropdown";

export default function ResumeFormat({ country, setCountry }) {
  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-[#4b1e8b]">
            Resume Format by Country
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Choose the target country to preview resume format and localization
            notes
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-800 font-bold">
                Target Country/Region
              </label>
              <div className="mt-2 w-56">
                <RegionDropdown value={country} onChange={setCountry} />
              </div>

              <div className="mt-4 text-xs text-gray-600">
                <div className="font-semibold">
                  Cultural Notes for {country}
                </div>
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  <li>No photo required - can be discriminatory</li>
                  <li>Focus on achievements and quantified results</li>
                  <li>Keep it 1-2 pages maximum</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-100">
              <div className="text-xs font-semibold">Format Guidelines</div>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li>Max Pages: 2</li>
                <li>Photo Required: No</li>
                <li>Personal Details: Not needed</li>
                <li>Date Format: MM/DD/YYYY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
