import React from "react";

export default function ATSTips() {
  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-bold text-[#3A0CA3] font-montserrat">
          ATS Optimization Tips
        </h2>
        <p className="text-xs font-montserrat text-[#5B5B5B]">
          Make sure your resume passes Applicant Tracking Systems
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-montserrat text-[#5B5B5B]">
        <div>
          <div className="mb-3">
            <h1 className="text-[14px] font-montserrat text-[#3A0CA3] font-bold">
              ✓ Do's
            </h1>
          </div>
          <ul className="list-disc pl-4 space-y-2 font-medium">
            <li>Use standard section headings</li>
            <li>Include relevant keywords from job descriptions</li>
            <li>Save as PDF / Word formats</li>
            <li>Use simple, clean formatting</li>
          </ul>
        </div>
        
        <div>
        <div className="mb-3">
            <h1 className="text-[14px] font-montserrat text-[#3A0CA3] font-bold">
              ✗ Don'ts
            </h1>
          </div>
          <ul className="list-disc pl-4 space-y-2 font-montserrat text-[#5B5B5B] font-medium">
            <li>Avoid complex graphics or images</li>
            <li>Don't use tables for layout</li>
            <li>Avoid unusual fonts or symbols</li>
            <li>Don't include personal photos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
