import React from "react"
import { TbFileDescription } from "react-icons/tb"

function DownloadCard({ title, fileUrl }) {
  function handleDownload() {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = title + ".pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="mt-2 w-24 h-24 rounded-lg border-dashed border-purple-200 flex items-center justify-center">
        <TbFileDescription size={72} className="text-purple-900" />
      </div>
      <div className="text-sm font-semibold text-[#5B5B5B] font-montserrat">{title}</div>
      <button
        onClick={handleDownload}
        className="text-[11px] font-montserrat text-[#F72585] font-bold tracking-wide hover:underline mb-14"
      >
        DOWNLOAD
      </button>
    </div>
  )
}

export default function ResumeDownloads() {
  const items = [
    { title: "IT Resume", fileUrl: "/Beam Resume Template.pdf" },
    { title: "IT Resume", fileUrl: "/Professional Resume Template.pdf" },
    { title: "IT Resume", fileUrl: "/Elegant Resume Template.pdf" },
    { title: "IT Resume", fileUrl: "/Official Resume Template.pdf" },
    { title: "IT Resume", fileUrl: "/Standout Resume Template.pdf" },
  ]

  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <h2 className="text-xl font-bold text-[#3A0CA3] font-montserrat">
        Resume Download History
      </h2>
      <div className="mt-2 mb-12">
        <p className="text-xs text-[#5B5B5B] font-montserrat font-normal">
          Track all your resume downloads with timestamps and formats
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((it, idx) => (
          <DownloadCard key={idx} title={it.title} fileUrl={it.fileUrl} />
        ))}
      </div>
    </section>
  )
}
