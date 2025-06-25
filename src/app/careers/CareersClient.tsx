'use client';

import React, { useEffect, useState, useRef } from "react";
import { Warehouse } from "./warehouse";
import SectionImage from "./imageSelection";
import { BranchDropdown } from "./BranchDropdown";
import BranchPageContent from "./BranchPageContent";
import DefaultCareersContent from "./DefaultCareersContent";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { HiOutlinePrinter } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface CareersClientProps {
  warehouses: Warehouse[];
  initialSelectedId?: string | null;
}

export default function CareersClient({ warehouses, initialSelectedId }: CareersClientProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId || null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setSelectedId(initialSelectedId || null);
  }, [initialSelectedId]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (code: string) => {
    setDropdownOpen(false);
    if (code === "back") {
      setSelectedId(null);
      router.replace("/careers");
    } else {
      setSelectedId(code);
      router.replace(`/careers/branches/${encodeURIComponent(code)}`);
    }
  };

  return (
    <>
      {/* Wurth Header Image */}
      <div className="w-full bg-white flex justify-center items-center print:hidden">
        <img
          src="/wurth header.png"
          alt="Würth Baer Supply Header"
          className="h-15 md:h-60 w-full object-contain"
        />
      </div>

    <div className="md:max-w-screen-xl mx-2.5 md:mx-auto p-0 space-y-2 bg-white print:max-w-full print:p-0 print:space-y-0 print:bg-white print:text-black print:mt-0 mt-3">
      {selectedId && (
        <button
          onClick={() => handleSelect("back")}
          className="flex items-center gap-2 cursor-pointer text-red-700 font-semibold bg-white mb-2 mt-4 print:hidden"
        >
          <IoChevronBack />
          Careers Page
        </button>
      )}

      {/* First Row: Header Section */}
      <div className="border-t border-b border-black py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 print:gap-0">
        <p className="text-xs sm:text-sm text-black mb-2 md:mb-0">
          To inquire or apply for any openings, follow the link to our careers portal at{' '}
          <a
            href="https://recruiting.ultipro.com/WUR1001WGNA/JobBoard/a5bcdfc2-ab10-403c-a590-9dc0784f71fc/?q=&o=postedDateDesc"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold cursor-pointer text-neutral-700"
          >
            Würth Baer Supply Careers
          </a>{' '}
          or send an application by{' '}
          <span className="font-bold">fax to 847-913-2049</span>
        </p>
        <button
          onClick={() => window.print()}
          className="rounded hover:opacity-80 transition cursor-pointer print:hidden self-end md:self-auto"
        >
          <HiOutlinePrinter className="w-[25px] h-[25px]"/>
        </button>
      </div>

      {/* Second Row: Second Header Section */}
      <div className="border-b border-red-600 pb-1 print:mt-2">
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-center sm:text-left">
            <SectionImage
              src="/super guy.png"
              alt="Superhero Illustration"
              width={60}
              height={60}
            />
            <span className="text-base sm:text-md text-black">
              We All have a Hero Inside Us.
            </span>
            <span className="text-base sm:text-md text-red-700">
              Which One are You?
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-0 items-center">
            <a
              href="/WBSC-Employment-Application.pdf"
              target="_blank"
              className="px-1.5 py-4.75 border border-black text-neutral-700 hover:bg-neutral-700 font-semibold text-sm hover:text-white flex items-center justify-between cursor-pointer print:hidden md:min-h-[42px] md:min-w-[270px] md:max-h-[42px] md:max-w-[270px] text-left w-full"
            >
              EMPLOYMENT APPLICATION
              <MdOutlinePictureAsPdf className="w-[20px] h-[20px]" />
            </a>

            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-0.25 py-4.75 border bg-neutral-700 border-neutral-700 text-white text-sm transition flex items-center justify-between cursor-pointer print:hidden md:min-h-[42px] md:min-w-[270px] md:max-h-[42px] md:max-w-[270px] text-left w-full"
              >
                <span className="truncate ml-1">
                  {selectedId
                    ? warehouses.find(w => w.code === selectedId)?.name || "CURRENT BRANCH OPENINGS"
                    : "CURRENT BRANCH OPENINGS"}
                </span>
                <IoIosArrowDown className="text-md text-red-600 font-bold mr-1 shrink-0" />
              </button>
              <BranchDropdown
                open={dropdownOpen}
                warehouses={warehouses}
                selectedCode={selectedId || ""}
                onSelect={handleSelect}
                onClose={() => setDropdownOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedId ? (
        <BranchPageContent branch={warehouses.find(w => w.code === selectedId)!} />
      ) : (
        <DefaultCareersContent />
      )}

    </div>
    </>
  );
}