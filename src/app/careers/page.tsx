'use client'

import React, { useState } from "react"
import { BranchDropdown } from "./BranchDropdown"
import { branches } from "./branches"
import SectionImage from "./imageSelection"

export default function CareersPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-0 space-y-2
    print:max-w-full print:p-0 print:space-y-0 print:bg-white print:text-black"
    >
      {/* First Row: Header Section */}
      <div className="border-t border-b border-black py-3 flex justify-between items-center">
        <p className="text-sm text-black">
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
              className="px-4 py-2.5 border border-black text-neutral-700 hover:bg-neutral-700 hover:text-white text-sm transition flex items-center gap-2 print:hidden"
            >
              EMPLOYMENT APPLICATION
              <SectionImage
                src="/pdf.png"
                alt="PDF Icon"
                width={17.5}
                height={17.5}
              />
            </a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2.5 border bg-neutral-700 border-neutral-700 text-white text-sm transition flex items-center gap-2 cursor-pointer print:hidden"
              >
                CURRENT BRANCH OPENINGS
                <SectionImage
                  src="/red downward arrow.png"
                  alt="Dropdown Arrow"
                  width={17.5}
                  height={17.5}
              />
              </button>
              <BranchDropdown
                open={dropdownOpen}
                branches={branches}
                onClose={() => setDropdownOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Youtube Videos Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 print:grid-cols-1 print:gap-0">
        <div className="aspect-video w-full print:aspect-auto print:h-[300px]">
          <iframe
            className="w-full h-5/8 print:hidden"
            src="https://www.youtube.com/embed/GDMxut0bo7s?si=_-MqS8qXgrO9QPo8"
            title="Würth Baer Supply Vernon Hills Branch Tour Youtube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="hidden print:block text-base font-semibold mt-2">
            Würth Baer Supply Vernon Hills Branch Tour Youtube Video
          </div>
        </div>
        <div className="aspect-video w-full print:aspect-auto print:h-[300px] print:-mt-20">
          <iframe
            className="w-full h-5/8 print:hidden"
            src="https://www.youtube.com/embed/kgXuhyfRHCk?si=lypMjmrc-2ryVP6R"
            title="Würth Baer Supply Youtube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="hidden print:block text-base font-semibold mt-2">
            Würth Baer Supply Youtube Video
          </div>
        </div>
      </div>

      {/* Fourth Row: Our Values Section */}
      <div className="bg-gray-100 p-6 h-[700px] md:h-auto -mt-10 md:-mt-27.5 rounded-lg grid grid-cols-[162px_1.4fr_1fr_1fr] md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start
      print:bg-white print:p-2 print:rounded-none print:grid print:grid-cols-[162px_1.4fr_1fr_1fr] print:gap-6">
        <div className="flex flex-col items-center text-center print:items-start print:text-left">
          <p className="text-red-600 mb-1">Our Values</p>
          <SectionImage 
          src="/heart values2.png" 
          alt="Heart and Hand Wurth Icon"
          width={200} 
          height={200}
          className="print:w-[150px] print:h-[150px]"
          />
        </div>
       <div className="border-l border-red-600 pl-4 pt-8 h-[210px] print:border-0 print:pl-4 print:pt-24 print:h-[385px] print:border-l print:border-red-600">
          <p className="text-sm text-black">
            Our goal is to be known in the industry as a great<br/>
            company to do business with and work at. As such, the<br/>
            following represents our company values. These values<br/>
            are incorporated in our everyday work ethic and<br/>
            accountable of every Baer Supply Company employee.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 h-[210px] print:pl-4 print:h-[385px] print:border-l print:border-red-600">
          <ul className="list-[square] list-inside text-sm text-neutral-600 space-y-1 marker:text-xs marker:text-red-600">
            <li>We run our company with passion and commitment</li>
            <li>Customers are our number one priority</li>
            <li>We reward for performance excellence and results</li>
            <li>We display a sense of urgency in our work and especially towards our customers</li>
            <li>We have a can do attitude</li>
          </ul>
        </div>
        <div className="border-l border-red-600 pl-4 h-[210px] print:pl-4 print:h-auto print:border-l print:border-red-600">
          <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-sm text-neutral-600 space-y-4">
            <li>We are respected for our knowledge and ability to deliver</li>
            <li>We challenge the status quo as a means to improve the business</li>
            <li>Internally we work together for the benefit of our customers</li>
            <li>We develop our employees for career and personal growth</li>
          </ul>
        </div>
      </div>

     {/* Fifth Row: Equal Opportunities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-6.5
        print:gap-6 print:mt-2 print:bg-white print:p-2 print:rounded-none">
        <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-[170px_1fr] md:grid-cols-[170px_1fr] gap-4 items-start w-[615px] print:bg-white print:p-2 print:rounded-none print:w-[425px]">
          <div className="flex flex-col items-left text-left space-y-2 print:items-start print:text-left">
            <p className="text-red-600 mb-2 print:pt-10">Equal Opportunities</p>
            <SectionImage
              src="/people equal.png"
              alt="Team or Group Image"
              width={150}
              height={300}
              className="rounded print:w-[125px] print:h-[100px]"
            />
          </div>
          <div className="border-l border-red-600 pl-4 text-sm text-black print:pl-2 print:h-[385px] print:-ml-8 print:pt-2 print:border-l print:border-red-600">
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
        <div className="flex justify-end h-full print:justify-end print:h-auto print:self-start print:items-start print:-mt-90">
          <SectionImage
            src="/wurth group.png"
            alt="Würth Group"
            width={650}
            height={300}
            className="rounded-xl print:w-[310px] print:h-[250px]"
          />
        </div>
      </div>

      {/* Sixth Row: Career Advancment Section */}
      <div className="bg-gray-100 h-[650px] md:h-auto p-6 mt-4 rounded-lg grid grid-cols-[162px_1.4fr_1fr_1fr] md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start border-
  print:bg-white print:p-2 print:rounded-none print:grid print:grid-cols-[162px_1.4fr_1fr_1fr] print:gap-6">
        <div className="flex flex-col items-center text-center print:items-start print:text-left">
          <p className="text-red-600 mb-1">Career Advancement</p>
          <SectionImage
          src="/stairs guy.png" 
          alt="Career Advancement Icon"
          width={200} 
          height={200}
          className="print:w-[120px] print:h-auto"
          />
        </div>
        <div className="border-l border-red-600 pl-4 pt-12 h-[220px] print:border-0 print:pl-4 print:pt-10 print:h-[385px] print:-ml-5 print:border-l print:border-red">
          <p className="text-sm text-black">
            We promote and encourage internal career advancement<br/>
            in our company on both a regional and national level. To<br/>
            support this advancement, we will typically post most job<br/>
            openings in all regional branches. Employees may apply<br/>
            for those openings by contacting the regional manager<br/>
            and Human Resources.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 pt-6 h-[210px] space print:border-0 print:pl-4 print:pt-0 print:h-[385px] print:border-l print:border-red">
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
        <div className="border-l border-red-600 pl-4 pt-6 h-[210px] print:border-0 print:pl-4 print:pt-0 print:h-[385px] print:border-l print:border-red">
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

      {/* Seventh Row: Career Paths Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 items-start mt-6.5
         print:gap-6 print:mt-50 print:bg-white print:p-2 print:rounded-none">
        <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-[170px_1fr] gap-4 items-start w-[615px] print:bg-white print:rounded-none print:grid-cols-[170px_1fr] print:gap-6 print:w-full">
          <div className="flex flex-col items-left text-center space-y-2 print:justifty-start print:text-left">
            <p className="text-red-600 mb-1">Career Paths</p>
          <SectionImage
          src="/career paths.png" 
          alt="Career Advancement Icon"
          width={200} 
          height={200}
          className="print:w-[120px] print:h-auto"
          />
          </div>
          <div className="border-l border-red-600 pl-4 text-sm text-black h-[200px] print:border-l print:pl-4 print:pt-10 print:-ml-12 print:h-[385px]">
            <div className="flex flex-row gap-14 print:flex-col print:gap-4">
            <ul className="list-[square] marker:text-sm marker:text-red-600 list-inside text-sm text-neutral-700 space-y-2">
              <li>Outside Sales</li>
              <li>Operations</li>
              <li>Inside sales</li>
              <li>Marketing</li>
              <li>Purchasing</li>
            </ul>
            <ul className="list-[square] marker:text-sm marker:text-red-600 list-inside text-sm text-neutral-700 space-y-2">
              <li>Finance</li>
              <li>Information Technology</li>
              <li>Human Resources</li>
            </ul>
            </div>
            <p className="text-xs text-brand pt-1.5">
              Please check{' '}
            <span className="underline font-semibold">current openings</span> to apply for specific positions.
            </p>
        </div>
        </div>
        <div className="flex justify-end h-full print:justify-end print:h-auto print:-mt-95">
          <SectionImage
            src="/wurth employee.png"
            alt="Würth Group"
            width={650}
            height={300}
            className="rounded-xl print:w-[340px] print:h-[200px]"
          />
        </div>
        </div>

      {/* Eighth Row: Benefits Section */}
      <div className="bg-gray-100 h-[500px] md:h-auto p-6 mt-6.5 rounded-lg grid grid-cols-[162px_1.4fr_1fr_1fr] md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start border-
  print:bg-white print:p-2 print:rounded-none print:grid print:grid-cols-[162px_1.4fr_1fr_1fr]">
        <div className="flex flex-col items-center text-center print:items-start print:text-left">
          <p className="text-red-600 mb-1">Benefits</p>
          <SectionImage 
          src="/benefits umbrella.png" 
          alt="Heart and Hand Wurth Icon"
          width={200} 
          height={200}
          className="print:w-[120px] print:h-auto"
          />
        </div>
        <div className="border-l border-red-600 pl-4 md:pt-18 h-[210px] print:border-l print:border-red-600 print:pl-4 print:pt-15 print:h-[385px]">
          <p className="text-sm text-black">
            Würth Baer Supply Company offers a comprehensive and<br/>
            competitive package of benefits to meet our employees’<br/>
            health, retirement and financial security needs.
          </p>
        </div>
        <div className="border-l border-red-600 pl-4 pt-4 h-[210px] print:border-l print:border-red-600 print:pt-4 print:h-[385px]">
          <ul className="list-[square] list-inside md:text-sm text-neutral-700 space-y-1 marker:text-xs marker:text-red-600">
            <li>Medical, Dental and Vision Care Plans</li>
            <li>401(k) Plan</li>
            <li>Prescription drug card</li>
            <li>Life and Long-term Disability Insurance</li>
            <li>Health and Dependent Care Savings Accounts</li>
          </ul>
        </div>
        <div className="border-l border-red-600 pl-4 pt-4 h-[210px] print:border-l print:border-red-600 print:pt-4 print:h-[385px]">
          <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-sm text-neutral-700 space-y-1.5">
            <li>Tuition Reimbursement</li>
            <li>Vacation and Sick/Personal Time</li>
          </ul>
          <div className="flex justify-end items-end mt-10 print:justify-end print:items-start print:mt-20">
            <SectionImage
              src="/super guy right.png"
              alt="Super Guy"
              width={110}
              height={110}
              className="print:w-[100px] print:h-[100px]"
            />
          </div>
        </div>  
      </div>

      {/* Ninth Row: Fun Place to Work Section */}
      <div className=" h-[450px] md:h-auto w-[625px] md:w-auto grid grid-cols-[3.25fr_1.175fr] md:grid-cols-[3.25fr_1.175fr] gap-5 items-start mt-6.5
  print:grid print:grid-cols-[3.275fr_1.175fr] print:gap-5 print:mt-20 print:bg-white print:p-2 print:rounded-none">
        <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-[162px_1.77fr_1.1fr] gap-6 items-start print:bg-white print:p-2 print:rounded-none print:grid-cols-[162px_1.77fr_1.1fr] print:gap-6">
      <div className="flex flex-col items-center text-center print:items-start print:text-left">
        <p className="text-red-600 mb-1 print:mt-4">Fun Place to Work</p>
          <SectionImage
            src="/star guys.png"
            alt="Fun Place Icon"
            width={160}
            height={120}
            className="print:w-[125px] print:h-[100px] print:mt-4"
          />
      </div>
      <div className="border-l border-red-600 pl-4 print:border-l print:pl-2 print:border-red-600 print:h-[385px] print:pt-5 print:-ml-10">
        <p className="font-semibold text-xs mb-2">Here are some of the ways we have fun as a company</p>
          <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-xs text-neutral-700 space-y-1 h-[170px]">
            <li>Employee Appreciation Day - 1st Friday in March</li>
            <li>Driver Appreciation Week - September</li>
            <li>Customer Service Appreciation Week - October</li>
            <li>Cinco de Mayo Buffets</li>
            <li>Warehouse Lunches</li>
            <li>Summer Cook Outs</li>
            <li>Ice Cream Days</li>
          </ul>
      </div>
      <div className="border-l border-red-600 pl-3 print:border-l print:pl-2 print:border-red-600 print:h-[385px] print:-ml-4">
        <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside md:text-[0.61rem] text-[0.45rem] text-neutral-700 space-y-1 mt-1 h-[192px]">
          <li>Milestone Anniversary Events</li>
          <li>Celebrate birthdays, anniversaries, weddings, births, etc.</li>
          <li>Butterball Turkey Certificates at Thanksgiving</li>
          <li>Ugly Sweater Contest during the Holidays</li>
          <li>Breast Cancer Awareness - Pink Day</li>
          <li>Opportunities to attend NASCAR races</li>
          <li>Baseball Opening Day</li>
          <li>Football Jersey Friday before Super Bowl</li>
        </ul>
    </div>
    </div>
    <div className="flex items-center justify-end bg-white rounded-lg h-full print:justify-end print:rounded-none print:-mt-5">
      <SectionImage
        src="/pit crew2.png"
        alt="Würth NASCAR"
        width={350}
        height={200}
        className="rounded-xl print:w-[275px] print:h-[225px]"
      />
  </div>
  </div>
  {/* Tenth Row: Team Section */}
  <div className="md:ml-0 ml-4 w-[1000px] md:w-full flex justify-center items-center mt-6.5 print:mt-10 print:justify-start">
  <SectionImage
    src="/wurth images.png"
    alt="Würth Images"
    width={1300}
    height={200}
    className="print:w-full print:h-full"
  />
</div>
<div className="border-b border-black py-5.5 flex justify-between items-center"></div>
</div>
  )
}