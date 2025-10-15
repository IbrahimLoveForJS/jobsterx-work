import React, { useState } from "react";
import Header from "./components/Header";
import ResumeProgress from "./components/ResumeProgress";
import ResumeFormat from "./components/ResumeFormat";
import ResumeDownloads from "./components/ResumeDownloads";
import ATSTips from "./components/ATSTips";

export default function App() {
  const [country, setCountry] = useState("United States");

  return (
    <div className="min-h-screen bg-[#fbfbfd] py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full container-center mx-auto">
        <Header />

        <ResumeProgress />

        <ResumeFormat country={country} setCountry={setCountry} />

        <ResumeDownloads />

        <ATSTips />
      </div>
    </div>
  );
}
