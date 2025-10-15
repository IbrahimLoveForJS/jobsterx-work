import React, { useState } from "react";
import Header from "./components/Header";
import ResumeProgress from "./components/ResumeProgress";
import ResumeFormat from "./components/ResumeFormat";
import ResumeDownloads from "./components/ResumeDownloads";
import ATSTips from "./components/ATSTips";

export default function App() {
  const [country, setCountry] = useState("United States");

  return (
    <div className="min-h-screen bg-[#fbfbfd] py-8 pl-12 pr-6 sm:pl-20 sm:pr-8 lg:pl-56 lg:pr-20 flex justify-center">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Resume Progress */}
        <ResumeProgress />

        {/* Resume Format */}
        <ResumeFormat country={country} setCountry={setCountry} />

        {/* Resume Downloads */}
        <ResumeDownloads />

        {/* ATS Tips */}
        <ATSTips />
      </div>
    </div>
  );
}
