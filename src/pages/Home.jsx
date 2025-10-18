import { useState } from "react";
import Header from "../components/Header";
import ResumeProgress from "../components/ResumeProgress";
import ResumeFormat from "../components/ResumeFormat";
import ResumeDownloads from "../components/ResumeDownloads";
import ATSTips from "../components/ATSTips";
import LoaderDots from "../loaders/LoaderDots";
import LoaderRing from "../loaders/LoaderRing";
import LoaderBar from "../loaders/LoaderBar";
import LoaderSkeleton from "../loaders/LoaderSkeleton";
import ResumeAnalyzerLoader from "../loaders/ResumeAnalyzerLoader";
import ResumePreviewLoader from "../loaders/ResumePreviewLoader";
import Skeleton from "../loaders/Skeleton";

function Home() {
  const [country, setCountry] = useState("United States");

  return (
    <div className="py-8 px-6 sm:px-8 lg:px-20">
      <div className="w-full max-w-5xl mx-auto">
        <Header />
        <ResumeProgress />
        <ResumeFormat country={country} setCountry={setCountry} />
        <ResumeDownloads />
        <ATSTips />
      </div>
    </div>
  );
}

export default Home;
