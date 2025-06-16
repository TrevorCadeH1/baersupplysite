import React from "react";
import SectionImage from "./imageSelection";

export default function CareersHeader() {
  return (
    <>
      {/* First Row: Header Section */}
      <div className="border-t border-b border-black py-3 flex justify-between items-center">
        <p className="text-xs md:text-sm text-black">
          To inquire or apply for any openings, follow the link to our careers portal at{' '}
          <span className="underline font-semibold cursor-pointer">Würth Baer Supply Careers</span> or send an application by{' '}
          <span className="font-bold">fax to 847-913-2049</span>
        </p>
        <button
          onClick={() => window.print()}
          className="rounded hover:opacity-80 transition cursor-pointer print:hidden"
        >
          <SectionImage
            src="/printer image.png"
            alt="Print to PDF"
            width={45}
            height={45}
          />
        </button>
      </div>

      {/* Second Row: Below Header Section */}
      <div className="border-b border-red-600 pb-1">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
            <SectionImage
              src="/super guy.png"
              alt="Superhero Illustration"
              width={60}
              height={60}
            />
            <span className="text-md text-black">
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
              className="px-2.5 py-2 -md:px-4 md:py-2.5 border border-black text-neutral-700 hover:bg-neutral-700 hover:text-white text-sm transition flex items-center gap-2 print:hidden"
            >
              EMPLOYMENT APPLICATION
              <SectionImage
                src="/pdf.png"
                alt="PDF Icon"
                width={17.5}
                height={17.5}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}