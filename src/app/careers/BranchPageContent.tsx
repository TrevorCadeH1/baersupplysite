'use client'

import React, { useState } from "react";
import { Warehouse } from "./warehouse";
import SectionImage from "./imageSelection";
import { IoCall, IoLocationSharp } from "react-icons/io5";

interface Props {
  branch: Warehouse;
}

export default function BranchPageContent({ branch }: Props) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="md:max-w-screen-xl mx-auto p-4">

      {/* Branch Title Section */}
      <div className="flex flex-col md:flex-row bg-red-700 text-white overflow-hidden mt-6">
        <div className="flex items-center px-8 py-6 md:w-2/3">
          <img
              src="Wurth logo.png"
              className="object-cover w-40 h-40 md:h-32 rounded-none mr-4"
            />
          <div>
            <div className="text-2xl md:text-3xl font-bold uppercase">{branch.name}</div>
            <div className="text-md mt-1">BRANCH</div>
          </div>
        </div>
        {branch.image && (
          <div className="md:w-auto flex items-center justify-center bg-white">
            <img
              src={branch.image}
              alt={branch.name}
              className="object-cover w-full h-40 md:h-50 rounded-none"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-gray-100 rounded-b-lg p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-0">
        <div>
          {branch.address && (
            <div className="mb-2">
              <span className="font-semibold">Address:</span>
              <div>
                {branch.address}
                {branch.city && `, ${branch.city}`}
                {branch.state && `, ${branch.state}`}
                {branch.zipcode && ` ${branch.zipcode}`}
              </div>
            </div>
          )}
          {branch.phone && (
            <div className="flex items-center mb-2">
              <span className="font-semibold"><IoCall className="text-sm" /></span> {branch.phone}
            </div>
          )}
          {branch.gmap && (
            <div className="flex items-center mb-2"><IoLocationSharp className="text-sm" />
              <button
                onClick={() => setShowMap(!showMap)}
                className="text-blue-700 underline"
              >
                {showMap ? "Hide Map" : "Map/Directions"}
              </button>
              {showMap && (
                <div className="mt-2">
                  <iframe
                    src={branch.gmap.replace("/maps", "/maps/embed")}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Who We Are Section */}
        <div>
          <div className="font-bold text-lg text-red-600 mb-2">WHO WE ARE</div>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: branch.description || "" }}
          />
        </div>

        {/* Facility/Dept/Accessibility/Video Section */}
        <div>
          {branch.facility_size && (
            <div className="mb-2">
              <span className="font-semibold">Facility:</span> {branch.facility_size}
            </div>
          )}
          {branch.departments && (
            <div className="mb-2">
              <span className="font-semibold">Department:</span> {branch.departments}
            </div>
          )}
          {branch.is_accessible && (
            <div className="mb-2">
              <span className="font-semibold">Accessibility:</span> Yes
            </div>
          )}
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
      </div>

      {/* Career Today Section*/}
      <div className="bg-white rounded-lg shadow p-6 mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-bold mb-4 md:mb-0">
          Find Your Würth Baer Supply Company Career Today!
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded font-bold flex items-center gap-2">
          <SectionImage
            src="/job search.png"
            alt="Job Search"
            width={40}
            height={40}
          />
          SEARCH NOW
        </button>
      </div>

      {/* Wurth Images Section */}
      {branch.additional_images && branch.additional_images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mt-8">
          {branch.additional_images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Branch additional ${idx + 1}`}
              className="object-cover w-full h-40"
            />
          ))}
        </div>
      )}
    </div>
  );
}
