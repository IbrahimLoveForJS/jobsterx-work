import React from "react";
import { AiOutlineFile } from "react-icons/ai";
import { FaFile } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { MdInsertDriveFile, MdOutlineInsertDriveFile } from "react-icons/md";
import { TbFileDescription, TbFileText } from "react-icons/tb";

function DownloadCard({ title }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="mt-2 w-24 h-24 rounded-lg  border-dashed border-purple-200 flex items-center justify-center">
        <TbFileDescription size={72} className="text-purple-900"/>
      </div>
      <div className="text-xs font-semibold text-gray-600">{title}</div>
      <div className="text-[11px] text-pink-500 font-bold tracking-wide">DOWNLOAD</div>
    </div>
  );
}

export default function ResumeDownloads() {
  const items = new Array(5).fill("IT Resume");

  return (
    <section className="bg-white rounded-lg shadow-card p-6 mb-6">
      <h2 className="text-2xl font-bold text-purple-800">
        Resume Download History
      </h2>
      <div className="mt-2">
        <p className="text-xs text-zinc-500">Track all your resume downloads with timestamps and formats</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((it, idx) => (
          <DownloadCard key={idx} title={it} />
        ))}
      </div>
    </section>
  );
}   
