'use client'

import React from "react"
import Image from "next/image"

export default function CareersPage() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 space-y-6">
      {/* First Row: Title + Print Button */}
      <div className="flex justify-between items-center print:hidden">
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
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Second Row: Subheading + 2 Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 print:hidden">
        <Image
      src="/super guy.png"
      alt="Superhero Illustration"
      width={55}
      height={55}
    />
        <p className="text-md text-black-700">
          We All have a Hero Inside Us.
        </p>
        <p className="text-md text-red-700">
        Which One are You?
        </p>
        <div className="flex gap-3 mt-2 sm:mt-0">
          <a
            href="#"
            className="px-4 py-2 border border-brand text-brand rounded hover:bg-brand hover:text-white transition"
          >
            EMPLOYMENT APPLICATION
          </a>
          <button className="px-4 py-2 border border-brand text-brand rounded hover:bg-brand hover:text-white transition">
            CURRENT BRANCH OPENINGS
          </button>
        </div>
      </div>

      {/* Third Row: Side-by-Side Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/9"
            src="https://www.youtube.com/embed/GDMxut0bo7s?si=_-MqS8qXgrO9QPo8"
            title="YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/9"
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
