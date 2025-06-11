'use client'

import React, { useState } from "react"
import Image from "next/image"

export default function CareersPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-0 space-y-2">
      {/* First Row: Header Section */}
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

      {/* Second Row: Below Header Section */}
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
              className="px-4 py-1.5 border border-brand text-gray-700 hover:bg-gray-700 hover:text-white text-sm transition flex items-center gap-2"
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
                className="px-4 py-1.5 border bg-gray-700 border-gray-700 text-white text-sm transition flex items-center gap-2"
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

      {/* Third Row: Youtube Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/8"
            src="https://www.youtube.com/embed/GDMxut0bo7s?si=_-MqS8qXgrO9QPo8"
            title="Würth Baer Supply Vernon Hills Branch Tour Youtube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-5/8"
            src="https://www.youtube.com/embed/kgXuhyfRHCk?si=lypMjmrc-2ryVP6R"
            title="Würth Baer Supply Youtube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Fourth Row: Our Values Section */}
      <div className="bg-gray-100 p-6 -mt-27.5 rounded-lg grid grid-cols-1 md:grid-cols-[162px_1.5fr_1fr_1fr] gap-6 items-start border-">
        <div className="flex flex-col items-center text-center">
          <p className="text-red-600 mb-1">Our Values</p>
          <Image 
          src="/heart values2.png" 
          alt="Heart and Hand Wurth Icon"
          width={200} 
          height={200}
          />
        </div>
        <div className="border-l text-size- border-red-600 pl-4 pt-12 h-[210px]">
          <p className="text-sm text-black">
            Our goal is to be known in the industry as a great<br/>
            company to do business with and work at. As such, the<br/>
            following represents our company values. These values<br/>
            are incorporated in our everyday work ethic and<br/>
            accountable of every Baer Supply Company employee.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 h-[210px] space">
          <ul className="list-[square] list-inside text-sm text-gray-600 space-y-1 marker:text-xs marker:text-red-600">
            <li>We run our company with passion and commitment</li>
            <li>Customers are our number one priority</li>
            <li>We reward for performance excellence and results</li>
            <li>We display a sense of urgency in our work and especially towards our customers</li>
            <li>We have a can do attitude</li>
          </ul>
        </div>
        <div className="border-l border-red-600 pl-4 h-[210px]">
          <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-sm text-gray-600 space-y-4">
            <li>We are respected for our knowledge and ability to deliver</li>
            <li>We challenge the status quo as a means to improve the business</li>
            <li>Internally we work together for the benefit of our customers</li>
            <li>We develop our employees for career and personal growth</li>
          </ul>
        </div>
      </div>

     {/* Fifth Row: Equal Opportunities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-6.5">
        <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-[170px_1fr] gap-4 items-start w-[615px]">
          <div className="flex flex-col items-left text-left space-y-2">
            <p className="text-red-600 mb-2">Equal Opportunities</p>
            <Image
              src="/people equal.png"
              alt="Team or Group Image"
              width={150}
              height={300}
              className="rounded"
            />
          </div>
          <div className="border-l border-red-600 pl-4 text-sm text-black">
            <p className="text-sm text-black text-left">
              Würth Baer Supply Company provides equal<br/>
              opportunities to all employees and applicants for<br/>
              employment without regard to race, color, religion, sex,<br/>
              national origin, age, disability or handicap, or status as<br/>
              a Vietnam era or special disabled veteran, in<br/>
              accordance with applicable federal and state laws, and<br/>
              expressly prohibits any form of discrimination or<br/>
              harassment based on those factors. We have gender,<br/>
              race and ethnic diversity in every department within<br/>
              our company.
            </p>
          </div>
        </div>
        <div className="flex justify-end h-full">
          <Image
            src="/wurth group.png"
            alt="Würth Group"
            width={650}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Sixth Row: Career Advancment Section */}
      <div className="bg-gray-100 p-6 mt-4 rounded-lg grid grid-cols-1 md:grid-cols-[162px_1.5fr_1fr_1fr] gap-6 items-start border-">
        <div className="flex flex-col items-center text-center">
          <p className="text-red-600 mb-1">Career Advancement</p>
          <Image 
          src="/stairs guy.png" 
          alt="Career Advancement Icon"
          width={200} 
          height={200}
          />
        </div>
        <div className="border-l border-red-600 pl-4 pt-12 h-[220px]">
          <p className="text-sm text-black">
            We promote and encourage internal career advancement<br/>
            in our company on both a regional and national level. To<br/>
            support this advancement, we will typically post most job<br/>
            openings in all regional branches. Employees may apply<br/>
            for those openings by contacting the regional manager<br/>
            and Human Resources.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 pt-6 h-[210px] space">
          <p className="text-[0.825rem] text-black">
            As a member of the Würth group, Baer<br/>
            Supply Company employees have access<br/>
            to training and career opportunities within<br/>
            the vast international network of<br/>
            companies. For example, each year Baer<br/>
            Supply sends employees to development<br/>
            programs held at the Würth, Germany<br/>
            headquarters.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 pt-6 h-[210px]">
          <p className="text-[0.825rem] text-black">
            Würth recognizes service excellence in<br/>
            performance with an annual celebration<br/>
            located in Germany with participants from<br/>
            each of the 300 companies. Additional<br/>
            career growth opportunities exist within<br/>
            the North America network of companies.
          </p>
        </div>
      </div>

    </div>    
  )
}
