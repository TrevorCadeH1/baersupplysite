'use client'

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

export default function CareersPage() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchWarehousesData() {
      const res = await fetch('https://wbscdev.wurthbaersupply.com/rest/warehouses', {
        headers: {
          'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc',
        },
        cache: 'no-store',
      });

      if (res.ok) {
    const data: Warehouse[] = await res.json();
    console.log(data);
        setWarehouses(data);

        const savedCode = localStorage.getItem("selectedBranchCode");
        if (savedCode && data.some(w => w.code === savedCode)) {
          setSelectedId(savedCode);
        }
      }
    }
    fetchWarehousesData();
  }, []);

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
      localStorage.removeItem("selectedBranchCode");
    } else {
      setSelectedId(code);
      localStorage.setItem("selectedBranchCode", code);
    }
  };

  return (
    <div className="md:max-w-screen-xl mx-2.5 md:mx-auto p-0 space-y-2 bg-white print:max-w-full print:p-0 print:space-y-0 print:bg-white print:text-black">      
      {selectedId && (
        <button
          onClick={() => handleSelect("back")}
          className="flex items-center gap-1 cursor-pointer text-red-700 font-semibold bg-white mb-2 mt-4 print:hidden"
        >
          <IoChevronBack />
          Careers Page
        </button>
      )}
      {/* First Row: Header Section */}
      <div className="border-t border-b border-black py-3 flex justify-between items-center">
        <p className="text-xs md:text-sm text-black">
          To inquire or apply for any openings, follow the link to our careers portal at{' '}
          <a
            href="https://recruiting.ultipro.com/WUR1001WGNA/JobBoard/a5bcdfc2-ab10-403c-a590-9dc0784f71fc/?q=&o=postedDateDesc"
            target="_blank"
            className="underline font-bold cursor-pointer text-neutral-700"
          >
            Würth Baer Supply Careers
          </a>{' '}
          or send an application by{' '}
          <span className="font-bold">fax to 847-913-2049</span>
        </p>
        <button
          onClick={() => window.print()}
          className="rounded hover:opacity-80 transition cursor-pointer print:hidden"
        >
          <HiOutlinePrinter className="w-[25px] h-[25px]"/>
        </button>
      </div>

      {/* Second Row: Second Header Section */}
      <div className="border-b border-red-600 pb-1 print:mt-2">
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
              className="px-2.5 py-2 -md:px-4 md:py-2.5 border border-black text-neutral-700 hover:bg-neutral-700 font-semibold hover:text-white text-sm transition flex items-center gap-2 print:hidden"
            >
              EMPLOYMENT APPLICATION
              <MdOutlinePictureAsPdf className="w-[20px] h-[20px]" />
            </a>

           <div className="relative" ref={dropdownRef}>
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
  <BranchPageContent
    branch={warehouses.find(w => w.code === selectedId)!}
  />
) : (
  <DefaultCareersContent />
  )}
      </div>
  )
}