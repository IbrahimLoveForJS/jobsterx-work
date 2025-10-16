import { useState } from "react"
import Header from "./Header"
import ResumeProgress from "./ResumeProgress"
import ResumeFormat from "./ResumeFormat"
import ResumeDownloads from "./ResumeDownloads"
import ATSTips from "./ATSTips"

function Home() {
  const [country, setCountry] = useState("United States")

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
  )
}

export default Home
