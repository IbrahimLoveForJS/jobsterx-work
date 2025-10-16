import { useState } from "react";

export default function ResumePreview() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen min-w-[1000px] flex flex-col items-center">
      {/* ==== BUTTON BAR ==== */}
      <div className="w-[800px] flex justify-between items-center mb-6">
        <h2 className="text-purple-700 font-semibold text-lg">
          Resume Preview
        </h2>
        <div className="flex gap-3">
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200">
            Edit Details
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200">
            Close Preview
          </button>
        </div>
      </div>

      {/* ==== RESUME CONTENT ==== */}
      <div className="bg-white w-[800px] p-10 shadow-lg rounded-xl border">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Sameer Saleem
        </h1>
        <p className="text-center text-gray-600 mb-1">+971 1234567 - Dubai</p>
        <p className="text-center text-gray-600 mb-4">
          sameersaleem/in/linkedin - jobsterx.com
        </p>
        <hr className="border-gray-300 mb-4" />

        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div>
            <div className="flex justify-between text-sm font-semibold text-gray-800">
              <span>Senior Software Engineer</span>
              <span>2022.01 - Present</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>TechCorp Inc.</span>
              <span>San Francisco, CA</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>
                Led development of microservices architecture serving 1M+ users
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>
                Reduced system latency by 40% through optimization initiatives
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            EDUCATION
          </h2>
          <div className="flex justify-between text-sm text-gray-700">
            <div>
              <p className="font-semibold">
                Bachelor of Science in Computer Science
              </p>
              <p>University of California, Berkeley, CA</p>
            </div>
            <div className="text-right">
              <p>2016.08 - 2020.05</p>
              <p>GPA: 3.8</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            TECHNICAL SKILLS
          </h2>
          <p className="text-sm text-gray-700">JavaScript, Node.js</p>
        </section>

        <section>
          <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            PROJECTS
          </h2>
        </section>
      </div>
    </div>
  );
}
