'use client'

import React from "react";
import SectionImage from "./imageSelection";

export default function DefaultCareersContent() {
  return (
    <div className="bg-white">

      {/* Third Row: Youtube Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid-cols-1 print:gap-0">
        <div className="aspect-video w-full print:aspect-auto print:h-[300px]">
          <iframe
            className="w-full h-[250px] print:hidden"
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
            className="w-full h-[250px] print:hidden"
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
      <div className="bg-gray-100 p-4 md:p-6 mt-6 md:-mt-20 rounded-lg print:bg-white print:p-2 print:rounded-none print:mt-30">
        {/* Mobile Layout */}
        <div className="md:hidden print:hidden">
          <div className="flex flex-col items-center text-center mb-4">
            <p className="text-red-600 mb-2 text-sm font-medium">Our Values</p>
            <SectionImage
              src="/heart values2.png"
              alt="Heart and Hand Wurth Icon"
              width={120}
              height={120}
              className="w-[120px] h-auto"
            />
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-sm text-black leading-relaxed">
                Our goal is to be known in the industry as a great company to do business with and work at. As such, the following represents our company values. These values are incorporated in our everyday work ethic and accountable of every Baer Supply Company employee.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <ul className="list-[square] list-inside text-sm text-neutral-600 space-y-2 marker:text-red-600">
                <li>We run our company with passion and commitment</li>
                <li>Customers are our number one priority</li>
                <li>We reward for performance excellence and results</li>
                <li>We display a sense of urgency in our work and especially towards our customers</li>
                <li>We have a can do attitude</li>
              </ul>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <ul className="list-[square] list-inside text-sm text-neutral-600 space-y-2 marker:text-red-600">
                <li>We are respected for our knowledge and ability to deliver</li>
                <li>We challenge the status quo as a means to improve the business</li>
                <li>Internally we work together for the benefit of our customers</li>
                <li>We develop our employees for career and personal growth</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start print:grid print:grid-cols-[162px_1.4fr_1fr_1fr] print:gap-6">
          <div className="flex flex-col items-center text-center print:items-start print:text-left">
            <p className="text-red-600 mb-1">Our Values</p>
            <SectionImage
              src="/heart values2.png"
              alt="Heart and Hand Wurth Icon"
              width={200}
              height={200}
              className="w-[150px] h-auto print:w-[125px] print:h-[125px]"
            />
          </div>
          <div className="border-l border-red-600 pl-4 pt-8 h-[210px] print:border-0 print:pl-4 print:-ml-10 print:pt-14 print:h-[385px] print:border-l print:border-red-600">
            <p className="text-sm print:text-sm text-black">
              Our goal is to be known in the industry as a great<br/>
              company to do business with and work at. As such, the<br/>
              following represents our company values. These values<br/>
              are incorporated in our everyday work ethic and<br/>
              accountable of every Baer Supply Company employee.
            </p>
          </div>
          <div className="border-l border-red-600 pl-4 h-[210px] print:pl-4 print:h-[385px] print:border-l print:border-red-600">
            <ul className="list-[square] list-inside text-sm print:text-xs text-neutral-600 space-y-1 marker:text-xs marker:text-red-600">
              <li>We run our company with passion and commitment</li>
              <li>Customers are our number one priority</li>
              <li>We reward for performance excellence and results</li>
              <li>We display a sense of urgency in our work and especially towards our customers</li>
              <li>We have a can do attitude</li>
            </ul>
          </div>
          <div className="border-l border-red-600 pl-4 h-[210px] print:pl-4 print:h-[385px] print:border-l print:border-red-600">
            <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-sm print:text-xs text-neutral-600 space-y-4">
              <li>We are respected for our knowledge and ability to deliver</li>
              <li>We challenge the status quo as a means to improve the business</li>
              <li>Internally we work together for the benefit of our customers</li>
              <li>We develop our employees for career and personal growth</li>
            </ul>
          </div>
        </div>
      </div>

     {/* Fifth Row: Equal Opportunities Section */}
      <div className="mt-6 print:mt-10 print:bg-white print:p-2 print:rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-gray-100 p-6 rounded-lg print:bg-white print:p-2 print:rounded-none">
            {/* Mobile Layout */}
            <div className="md:hidden print:hidden">
              <div className="flex flex-col items-center text-center mb-4">
                <p className="text-red-600 mb-2 text-sm font-medium">Equal Opportunities</p>
                <SectionImage
                  src="/people equal.png"
                  alt="Team or Group Image"
                  width={120}
                  height={120}
                  className="w-[120px] h-auto rounded"
                />
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <p className="text-sm text-black leading-relaxed">
                  Würth Baer Supply Company provides equal opportunities to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, disability or handicap, or status as a Vietnam era or special disabled veteran, in accordance with applicable federal and state laws, and expressly prohibits any form of discrimination or harassment based on those factors. We have gender, race and ethnic diversity in every department within our company.
                </p>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-[170px_1fr] gap-4 items-start print:grid print:grid-cols-[170px_1fr] print:-ml-5">
              <div className="flex flex-col items-left text-left space-y-2 print:items-start print:text-left">
                <p className="text-red-600 mb-2 print:pt-10 text-base print:text-xs">Equal Opportunities</p>
                <SectionImage
                  src="/people equal.png"
                  alt="Team or Group Image"
                  width={150}
                  height={300}
                  className="rounded print:w-[125px] print:h-[125px]"
                />
              </div>
              <div className="border-l border-red-600 pl-4 text-sm text-black print:pl-2 print:h-[250px] print:-ml-7 print:pt-5 print:mr-10 print:border-l print:border-red-600">
                <p className="text-sm print:text-sm text-black text-left">
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
          </div>
          <div className="flex justify-center md:justify-end h-full print:justify-end print:h-auto print:self-start print:items-start print:block print:-mt-5">
            <SectionImage
              src="/wurth group.png"
              alt="Würth Group"
              width={650}
              height={300}
              className="w-full max-w-[625px] h-[150px] md:w-auto md:h-auto rounded-xl print:w-[600px] print:h-[150px]"
            />
          </div>
        </div>
      </div>

      {/* Sixth Row: Career Advancement Section */}
      <div className="bg-gray-100 p-6 mt-4 rounded-lg print:bg-white print:p-2 print:mt-10 print:-ml-4 print:rounded-none">
        {/* Mobile Layout */}
        <div className="md:hidden print:hidden">
          <div className="flex flex-col items-center text-center mb-4">
            <p className="text-red-600 mb-2 text-sm font-medium">Career Advancement</p>
            <SectionImage
              src="/stairs guy.png"
              alt="Career Advancement Icon"
              width={120}
              height={120}
              className="w-[120px] h-auto"
            />
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-sm text-black leading-relaxed">
                We promote and encourage internal career advancement in our company on both a regional and national level. To support this advancement, we will typically post most job openings in all regional branches. Employees may apply for those openings by contacting the regional manager and Human Resources.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-sm text-black leading-relaxed">
                As a member of the Würth group, Baer Supply Company employees have access to training and career opportunities within the vast international network of companies. For example, each year Baer Supply sends employees to development programs held at the Würth, Germany headquarters.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-sm text-black leading-relaxed">
                Würth recognizes service excellence in performance with an annual celebration located in Germany with participants from each of the 300 companies. Additional career growth opportunities exist within the North America network of companies.
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start print:grid print:grid-cols-[162px_1.4fr_1fr_1fr] print:gap-6">
          <div className="flex flex-col items-center text-center print:items-start print:text-left">
            <p className="text-sm text-red-600 mb-1">Career Advancement</p>
            <SectionImage
              src="/stairs guy.png"
              alt="Career Advancement Icon"
              width={200}
              height={200}
              className="print:w-[120px] print:h-auto"
            />
          </div>
          <div className="border-l border-red-600 pl-4 pt-12 h-[220px] print:border-0 print:pl-4 print:pt-10 print:h-[385px] print:-ml-5 print:border-l print:border-red">
            <p className="text-sm print:text-sm text-black">
              We promote and encourage internal career advancement<br/>
              in our company on both a regional and national level. To<br/>
              support this advancement, we will typically post most job<br/>
              openings in all regional branches. Employees may apply<br/>
              for those openings by contacting the regional manager<br/>
              and Human Resources.
            </p>
          </div>
          <div className="border-l border-red-600 pl-4 pt-6 h-[220px] print:border-0 print:pl-4 print:pt-0 print:h-[385px] print:border-l print:border-red">
            <p className="text-[0.825rem] print:text-[0.825rem] text-black">
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
          <div className="border-l border-red-600 pl-4 pt-6 h-[220px] print:border-0 print:pl-4 print:pt-0 print:h-[385px] print:border-l print:border-red">
            <p className="text-[0.825rem] print:text-[0.825rem] text-black">
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

      {/* Seventh Row: Career Paths Section */}
      <div className="mt-6 print:mt-20 print:bg-white print:p-2 print:rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-gray-100 p-6 rounded-lg print:bg-white print:rounded-none print:grid-cols-[170px_1fr] print:gap-6">
            {/* Mobile Layout */}
            <div className="md:hidden print:hidden">
              <div className="flex flex-col items-center text-center mb-4">
                <p className="text-red-600 mb-2 text-sm font-medium">Career Paths</p>
                <SectionImage
                  src="/career paths.png"
                  alt="Career Advancement Icon"
                  width={120}
                  height={120}
                  className="w-[120px] h-auto"
                />
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <div className="space-y-4">
                  <ul className="list-[square] marker:text-red-600 list-inside text-sm text-neutral-700 space-y-2">
                    <li>Outside Sales</li>
                    <li>Operations</li>
                    <li>Inside sales</li>
                    <li>Marketing</li>
                    <li>Purchasing</li>
                    <li>Finance</li>
                    <li>Information Technology</li>
                    <li>Human Resources</li>
                  </ul>
                  <p className="text-xs text-brand pt-2">
                    Please check{' '}
                    <span className="underline font-semibold">current openings</span> to apply for specific positions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-[170px_1fr] gap-4 items-start print:grid print:grid-cols-[170px_1fr] print:gap-6 print:-ml-10">
              <div className="flex flex-col items-left text-center space-y-2 print:justify-start print:text-left">
                <p className="text-red-600 mb-1">Career Paths</p>
                <SectionImage
                  src="/career paths.png"
                  alt="Career Advancement Icon"
                  width={200}
                  height={200}
                  className="print:w-[120px] print:h-auto"
                />
              </div>
              <div className="border-l border-red-600 pl-4 text-sm text-black h-[200px] print:border-l print:pl-4 print:pt-14 print:-ml-13 print:h-[350px]">
                <div className="flex flex-row gap-14 print:flex-col print:gap-4 print:-ml-2">
                  <ul className="list-[square] marker:text-sm marker:text-red-600 list-inside text-sm print:text-sm text-neutral-700 space-y-2">
                    <li>Outside Sales</li>
                    <li>Operations</li>
                    <li>Inside sales</li>
                    <li>Marketing</li>
                    <li>Purchasing</li>
                  </ul>
                  <ul className="list-[square] marker:text-sm marker:text-red-600 list-inside text-sm print:text-sm text-neutral-700 space-y-2 print:ml-0">
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
          </div>
          <div className="flex justify-center md:justify-end print:justify-end print:block print:h-auto print:-mt-0">
            <SectionImage
              src="/wurth employee.png"
              alt="Würth Group"
              width={650}
              height={300}
              className="w-full max-w-[625px] h-auto md:w-auto md:h-[248px] rounded-xl print:w-[600px] print:h-[150px]"
            />
          </div>
        </div>
      </div>

      {/* Eighth Row: Benefits Section */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg print:bg-white print:p-2 print:mt-50 print:rounded-none print:-ml-10">
        {/* Mobile Layout */}
        <div className="md:hidden print:hidden">
          <div className="flex flex-col items-center text-center mb-4">
            <p className="text-red-600 mb-2 text-sm font-medium">Benefits</p>
            <SectionImage
              src="/benefits umbrella.png"
              alt="Heart and Hand Wurth Icon"
              width={120}
              height={120}
              className="w-[120px] h-auto"
            />
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-sm text-black leading-relaxed">
                Würth Baer Supply Company offers a comprehensive and competitive package of benefits to meet our employees' health, retirement and financial security needs.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <ul className="list-[square] list-inside text-sm text-neutral-700 space-y-2 marker:text-red-600">
                <li>Medical, Dental and Vision Care Plans</li>
                <li>401(k) Plan</li>
                <li>Prescription drug card</li>
                <li>Life and Long-term Disability Insurance</li>
                <li>Health and Dependent Care Savings Accounts</li>
                <li>Tuition Reimbursement</li>
                <li>Vacation and Sick/Personal Time</li>
              </ul>
            </div>
            <div className="flex justify-center mt-4 print:hidden">
              <SectionImage
                src="/super guy right.png"
                alt="Super Guy"
                width={110}
                height={110}
                className="w-[110px] h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[162px_1.4fr_1fr_1fr] gap-6 items-start print:grid print:grid-cols-[162px_1.4fr_1fr_1fr]">
          <div className="flex flex-col items-center text-center print:ml-10 print:items-start print:text-left">
            <p className="text-red-600 mb-1">Benefits</p>
            <SectionImage
              src="/benefits umbrella.png"
              alt="Heart and Hand Wurth Icon"
              width={200}
              height={200}
              className="print:w-[120px] print:h-auto"
            />
          </div>
          <div className="border-l border-red-600 pl-4 pt-18 h-[210px] print:border-l print:border-red-600 print:pl-4 print:pt-15 print:h-[350px]">
            <p className="text-sm print:text-sm text-black">
              Würth Baer Supply Company offers a comprehensive and<br/>
              competitive package of benefits to meet our employees'<br/>
              health, retirement and financial security needs.
            </p>
          </div>
          <div className="border-l border-red-600 pl-4 pt-4 h-[210px] print:border-l print:border-red-600 print:pt-4 print:h-[350px]">
            <ul className="list-[square] list-inside text-sm print:text-sm text-neutral-700 space-y-1 marker:text-xs marker:text-red-600">
              <li>Medical, Dental and Vision Care Plans</li>
              <li>401(k) Plan</li>
              <li>Prescription drug card</li>
              <li>Life and Long-term Disability Insurance</li>
              <li>Health and Dependent Care Savings Accounts</li>
            </ul>
          </div>
          <div className="border-l border-red-600 pl-4 pt-4 h-[210px] print:border-l print:border-red-600 print:pt-4 print:h-[350px]">
            <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-sm print:text-sm text-neutral-700 space-y-1.5">
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
      </div>

      {/* Ninth Row: Fun Place to Work Section */}
      <div className="mt-6 print:mt-20 print:bg-white print:p-2 print:rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-[3.25fr_1.175fr] gap-5 items-start print:grid print:grid-cols-[3.275fr_1.175fr] print:-ml-5 print:gap-5">
          <div className="bg-gray-100 p-6 rounded-lg print:bg-white print:p-2 print:rounded-none">
            {/* Mobile Layout */}
            <div className="md:hidden print:hidden">
              <div className="flex flex-col items-center text-center mb-4">
                <p className="text-red-600 mb-2 text-sm font-medium">Fun Place to Work</p>
                <SectionImage
                  src="/star guys.png"
                  alt="Fun Place Icon"
                  width={120}
                  height={120}
                  className="w-[120px] h-auto"
                />
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <p className="font-semibold text-sm mb-3">Here are some of the ways we have fun as a company</p>
                <div className="space-y-2">
                  <ul className="list-[square] marker:text-red-600 list-inside text-sm text-neutral-700 space-y-1">
                    <li>Employee Appreciation Day - 1st Friday in March</li>
                    <li>Driver Appreciation Week - September</li>
                    <li>Customer Service Appreciation Week - October</li>
                    <li>Cinco de Mayo Buffets</li>
                    <li>Warehouse Lunches</li>
                    <li>Summer Cook Outs</li>
                    <li>Ice Cream Days</li>
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
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-[162px_1.77fr_1.1fr] gap-6 items-start print:grid print:grid-cols-[162px_1.77fr_2fr] print:gap-6">
              <div className="flex flex-col items-center text-center print:items-start print:text-left">
                <p className="text-base text-red-600 mb-1 print:mt-4">Fun Place to Work</p>
                <SectionImage
                  src="/star guys.png"
                  alt="Fun Place Icon"
                  width={160}
                  height={120}
                  className="w-[160px] h-auto print:w-[125px] print:h-[100px] print:mt-4"
                />
              </div>
              <div className="border-l border-red-600 h-auto pl-4 print:border-l print:pl-2 print:border-red-600 print:h-[385px] print:pt-5 print:-ml-10">
                <p className="font-semibold text-xs print:text-xs mb-2">Here are some of the ways we have fun as a company</p>
                <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-xs print:text-xs text-neutral-700 space-y-1">
                  <li>Employee Appreciation Day - 1st Friday in March</li>
                  <li>Driver Appreciation Week - September</li>
                  <li>Customer Service Appreciation Week - October</li>
                  <li>Cinco de Mayo Buffets</li>
                  <li>Warehouse Lunches</li>
                  <li>Summer Cook Outs</li>
                  <li>Ice Cream Days</li>
                </ul>
              </div>
              <div className="border-l border-red-600 h-auto pl-3 print:border-l print:pl-2 print:border-red-600 print:h-[385px] print:-ml-4">
                <ul className="list-[square] marker:text-xs marker:text-red-600 list-inside text-[0.61rem] print:text-xs text-neutral-700 space-y-1 mt-1">
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
          </div>
          <div className="flex items-center justify-center md:justify-end bg-white rounded-lg h-full print:justify-center print:rounded-none print:block print:mt-10">
            <SectionImage
              src="/pit crew2.png"
              alt="Würth NASCAR"
              width={350}
              height={200}
              className="w-full max-w-[400px] h-[200px] md:h-[225px] rounded-xl print:w-full print:h-[250px]"
            />
          </div>
        </div>
      </div>
        
      {/* Tenth Row: Team Section */}
      <div className="flex justify-center items-center mt-6 print:mt-0 print:justify-start">
        <SectionImage
          src="/wurth images.png"
          alt="Würth Images"
          width={1300}
          height={200}
          className="w-full print:w-full print:h-full"
        />
      </div>
      <div className="border-b border-black py-5.5 flex justify-between items-center"></div>

    </div>
  )
}