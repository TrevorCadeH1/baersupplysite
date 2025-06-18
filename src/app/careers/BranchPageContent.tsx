'use client'

import React, { useState } from "react";
import { Warehouse } from "./warehouse";
import SectionImage from "./imageSelection";
import { IoCall, IoLocationSharp } from "react-icons/io5";

interface Props {
  branch: Warehouse;
}

export default function BranchPageContent({ branch }: Props) {
  const [showMap] = useState(false);

  return (
    <div className="md:max-w-screen-xl mx-auto p-4 -mt-2 bg-white">

      {/* Branch Title Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-6 gap-0 md:gap-x-4">
        <div className="flex items-center bg-neutral-700 text-white">
            <img
            src="Wurth logo.png"
            className="object-cover w-35 h-40 md:h-full rounded-none mr-4"
            alt="Wurth Logo"
            />
            <div>
            <div className="text-2xl md:text-3xl font-bold uppercase text-white">{branch.name}</div>
            <div className="text-md mt-1">BRANCH</div>
            </div>
        </div>
        {branch.image && (
            <div className="flex items-center justify-center bg-white">
            <img
                src={branch.image}
                alt={branch.name}
                className="object-cover w-full h-40 md:h-50 rounded-none"
            />
            </div>
        )}
        </div>

      {/* Info Section */}
      <div className="bg-gray-100 rounded-b-lg p-4 md:p-8 mt-0 flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-6 print:grid print:grid-cols-3 print:grid-rows-2 print:p-6 print:gap-6 print:text-md">
        <div className="text-black">
          {branch.address && (
            <div className="mb-2">
              <span className="font-semibold">Address:</span>
               {branch.gmap && (
            <div className="flex items-center mb-2">
                <IoLocationSharp className="text-lg mr-1" />
                <a
                href={branch.gmap.replace("output=embed", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
                >
                <div>
                {branch.address}
                {branch.city && `, ${branch.city}`}
                {branch.state && `, ${branch.state}`}
                {branch.zipcode && ` ${branch.zipcode}`}
              </div>
                </a>
            </div>
            )}
            </div>
          )}
          {branch.phone && (
            <div className="flex items-center cursor-pointer hover:underline mb-2">
              <span className="text-black font-semibold"><IoCall className="text-sm" /></span> {branch.phone}
            </div>
          )}

        <span className="font-semibold text-black">
             Operation Hours:
        </span><br />
        {branch.operation_hours}<br />

        <span className="font-semibold text-black">
            Branch Code:
        </span><br />
        {branch.code}
        </div>

        {/* Who We Are Section */}
        <div className="border-l border-red-600 pl-4">
          <div className="font-bold text-[1.5rem] md:text-[1.75rem] print:text-md text-red-700 md:mb-0">WHO WE ARE</div>
          <div
            className="text-md md:text-sm text-black"
            dangerouslySetInnerHTML={{ __html: branch.description || "" }}
          />
        </div>

        {/* Facility/Dept/Accessibility */}
        <div className="border-l border-red-600 pl-4 text-black">
          {branch.facility_size && (
            <div className="mb-2">
              <span className="text-black font-semibold">Facility:</span> <span className="text-black text-md md:text-md">{branch.facility_size}</span>
            </div>
          )}
          {branch.departments && (
            <div className="mb-2">
              <span className="text-black font-semibold">Department:</span> <span className="text-black text-md md:text-md">{branch.departments.split(/\r?\n/).map(dept => dept.trim()).join(', ')}</span>
            </div>
          )}
          {branch.is_accessible && (
            <div className="mb-2">
              <span className="text-black font-semibold">Accessibility:</span> Yes
            </div>
          )}
        </div>

        <div className="border-l border-red-600 md:row-span-2 pl-4 print:hidden">
            {branch.video_link && (
            <div className="mb-2">
              <iframe
                width="100%"
                height="150"
                src={branch.video_link.replace("app.slidepresenter.com/presentations/", "www.youtube.com/embed/kgXuhyfRHCk?si=lypMjmrc-2ryVP6R")}
                title={`${branch.name} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Career Today Section*/}
      <div className="bg-gray-100 border-t border-red-600 p-6 mt-4 flex flex-col md:flex-row col-span-3 items-center justify-between print:mt-10">
        <div className="text-3xl text-black font-bold mb-4 md:-mt-30 md:mb-0">
          Find Your Würth Baer Supply Company Career Today!
        </div>
        <div className="flex flex-col items-end">
            <SectionImage
                src="/job logo.png"
                alt="Job Search"
                width={160}
                height={160}
            />
            <a
                href={branch.careers_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 hover:bg-white hover:text-red-600 hover:border-red-600 hover:border whitespace-nowrap text-white font-bold py-2 px-6 transition"
            >
            SEARCH NOW
            </a>
        </div>
    </div>

    </div>

      {/* Wurth Images or Red Background Section*/}
        <div
        className={
            branch.additional_images && branch.additional_images.length > 0
            ? "grid grid-cols-1 md:grid-cols-5 gap-0 mt-8 print:-mt-5 print:w-full print:h-60 print:flex print:items-center print:justify-center border-b border-black print:border-b print:border-black"
            : "mt-8 bg-red-700 w-full h-60 print:-mt-80 print:w-60 print:h-60 flex items-center justify-center"
        }
        >
        {branch.additional_images && branch.additional_images.length > 0 ? (
            branch.additional_images.map((img, idx) => (
            <img
                key={idx}
                src={img}
                alt={`Branch additional ${idx + 1}`}
                className="object-cover w-full h-60"
            />
            ))
        ) : (
            <span className="w-full h-full"></span>
        )}
        </div>
    </div>
  );
}
