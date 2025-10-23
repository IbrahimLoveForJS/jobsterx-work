import React from "react";

export default function Heading({ heading = "Heading", subtitle = "", bgColor = "bg-gray-100" }) {
  return (
    <header className={`${bgColor} font-montserrat w-full rounded-xl border border-transparent px-6 py-3 flex items-center justify-between`}>
      <div>
        <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{heading}</h1>
        {subtitle && <p className="text-sm font-monteserrat text-gray-600 mt-0.5">{subtitle}</p>}
      </div>

      {/* right-side area left intentionally empty for custom icons/actions */}
      <div className="flex items-center gap-3">
        {/* icons / buttons can be inserted here by you */}
      </div>
    </header>
  );
}