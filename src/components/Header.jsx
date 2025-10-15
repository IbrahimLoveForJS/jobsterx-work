export default function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-[18px] font-semibold">Resume Builder</h1>
        <p className="text-[12px] text-gray-500">
          Create ATS-optimized resumes that get you noticed
        </p>
      </div>
      <div>
        <button className="bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Get Your Resume 2.0 Score
        </button>
      </div>
    </header>
  );
}
