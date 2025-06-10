'use client'

import React, { useState } from "react"
import Image from "next/image"

export default function CareersPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-6 space-y-2">
      {/* First Row: Title and Print */}
      <div className="border-t border-b border-black py-3 flex justify-between items-center print:hidden">
        <p className="text-sm text-brand">
          To inquire or apply for any openings, follow the link to our careers portal at{' '}
          <span className="underline">Würth Baer Supply Careers</span> or send an application by{' '}
          <span className="font-bold">fax to 847-913-2049</span>
        </p>

        <button
          onClick={() => window.print()}
          className="rounded hover:opacity-80 transition"
        >
          <Image
            src="/printer image.png"
            alt="Print to PDF"
            width={45}
            height={45}
          />
        </button>
      </div>

      {/* Second Row: Guy, text, two buttons */}
      <div className="border-b border-red-600 pb-1 print:hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
            <Image
              src="/super guy.png"
              alt="Superhero Illustration"
              width={60}
              height={60}
            />
            <span className="text-md text-black-700">
              We All have a Hero Inside Us.
            </span>
            <span className="text-md text-red-700">
              Which One are You?
            </span>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0 items-center">
            <a
              href="/WBSC-Employment-Application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-brand text-gray-700 hover:bg-gray-700 hover:text-white transition flex items-center gap-2"
            >
              EMPLOYMENT APPLICATION
              <Image
                src="/pdf.png"
                alt="PDF Icon"
                width={15}
                height={15}
              />
            </a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-1.5 border bg-gray-700 border-gray-700 text-white transition flex items-center gap-2"
              >
                CURRENT BRANCH OPENINGS
                <Image
                  src="/red downward arrow.png"
                  alt="Dropdown Arrow"
                  width={15}
                  height={15}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-1 w-full bg-gray-500 border border-gray-500">
                  <div className="px-4 py-2 text-sm text-white hover:bg-white hover:text-red-600 cursor-pointer">
                    Vernon Hills, IL (Corporate Headquarters)
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Side-by-Side Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/8"
            src="https://www.youtube.com/embed/GDMxut0bo7s?si=_-MqS8qXgrO9QPo8"
            title="YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/8"
            src="https://www.youtube.com/embed/kgXuhyfRHCk?si=lypMjmrc-2ryVP6R"
            title="YouTube Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
