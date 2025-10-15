import React from "react";

export default function ATSTips() {
  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <h2 className="text-sm font-semibold text-[#4b1e8b]">
        ATS Optimization Tips
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600">
        <div>
          <ul className="list-disc pl-4 space-y-2">
            <li>Use standard section headings</li>
            <li>Include relevant keywords from job descriptions</li>
            <li>Save as PDF / Word formats</li>
            <li>Use simple, clean formatting</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-4 space-y-2">
            <li>Avoid complex graphics or images</li>
            <li>Don't use tables for layout</li>
            <li>Avoid unusual fonts or symbols</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
