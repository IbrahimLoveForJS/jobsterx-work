import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(false)
  const [value, setValue] = useState('')

  function handleContent() {
    if(value !== '') {
      setShowContent(true)
      setValue('')
    }
  }

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Resume Builder
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Create ATS-optimized resumes that get you noticed
          </p>
        </div>

        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 w-full sm:w-auto"
          >
            Get Your Resume 2.0 Score
          </button>
        </div>
      </header>

      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white rounded-xl p-6 min-w-[620px] max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-start">
              <h3 className="font-bold mb-2 text-2xl">
                Resume JD Score Analysis
              </h3>
              <button
                className="text-gray-600 text-lg hover:text-gray-800"
                onClick={() => {setShowModal(false)
                  setShowContent(false)
                }}
              >
                ×
              </button>
            </div>

            <div className="my-4 text-sm text-gray-500">
              <p>
                Get your resume scored against job description and ATS systems.
                Upload your
                <br /> resume to see how well it matches industry requirements
                and get optimization tips.
              </p>
            </div>

            <h1 className="text-lg font-bold mb-2">
              Paste Your Resume Content
            </h1>
            <textarea
              className="w-full border border-gray-300 rounded-xl p-2 mb-4"
              rows={5}
              placeholder="Paste your current resume text here for AI Analysis..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />

            <button
              onClick={handleContent}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg w-full shadow-md transition-all duration-200"
            >
              Analyze with AI
            </button>

            {/* ========================= */}
            {/* ATS Results Section Below */}
            {/* ========================= */}
            {showContent && <div className="mt-8 space-y-6">
              {/* Top Score Section */}
              <div className="grid grid-cols-2 gap-6 bg-[#f9f7ff] p-6 rounded-xl shadow-md">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">ATS Compatibility Score</p>
                  <p className="text-2xl font-bold text-purple-700">70/100</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Improvement Areas</p>
                  <p className="text-2xl font-bold text-purple-700">4</p>
                </div>
              </div>

              {/* Strength Areas */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="font-semibold text-purple-700 mb-2">✓ Strength Areas</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Strong professional experience section</li>
                  <li>Good use of action-oriented language</li>
                  <li>Clear career progression shown</li>
                </ul>
              </div>

              {/* Improvement Suggestions */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="font-semibold text-purple-700 mb-2">
                  ⚙️ Improvement Suggestions
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Add quantifiable achievements with specific metrics</li>
                  <li>Include more industry-specific keywords from job descriptions</li>
                  <li>Use action verbs at the beginning of bullet points</li>
                  <li>Add relevant certifications or training programs</li>
                </ul>
              </div>

              {/* Recommended Keywords */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="font-semibold text-purple-700 mb-3">
                  🔑 Recommended Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Project Management",
                    "Team Leadership",
                    "Communication",
                    "Problem Solving",
                    "Strategic Planning",
                  ].map((keyword, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>}
          </div>
        </div>
      )}
    </>
  );
}
