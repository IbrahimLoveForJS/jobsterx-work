import React, { useEffect, useState } from "react"

export default function RegionDropdown({ value, onChange }) {
  const [countries, setCountries] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        const data = await res.json()

        const formatted = data
          .map((c) => ({
            name: c.name.common,
            flag: c.flags?.svg || c.flags?.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))

        setCountries(formatted)
      } catch (err) {
        console.error("Failed to load countries", err)
      }
    }

    fetchCountries()
  }, [])

  const selectedCountry = countries.find((c) => c.name === value)

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-md py-2 pl-3 pr-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {selectedCountry ? (
          <div className="flex items-center gap-2">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-5 h-3 object-cover"
            />
            {/* ✅ Added zinc color + small text */}
            <span className="text-zinc-600 text-sm">{selectedCountry.name}</span>
          </div>
        ) : (
          <span className="text-gray-400">Select a Country</span>
        )}

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto">
          {countries.map((c) => (
            <div
              key={c.name}
              onClick={() => {
                onChange(c.name)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <img src={c.flag} alt={c.name} className="w-5 h-3 object-cover" />
              {/* ✅ Zinc + small size for dropdown list */}
              <span className="text-zinc-600 text-xs">{c.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
