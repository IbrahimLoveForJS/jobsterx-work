export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Resume Builder
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Create ATS-optimized resumes that get you noticed
        </p>
      </div>

      <div>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 w-full sm:w-auto">
          Get Your Resume 2.0 Score
        </button>
      </div>
    </header>
  )
}
