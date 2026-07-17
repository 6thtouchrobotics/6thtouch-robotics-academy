"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaCalendarDays, 
  FaLocationDot, 
  FaCreditCard, 
  FaCircleCheck, 
  FaCopy, 
  FaChevronLeft, 
  FaArrowUpRightFromSquare, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa6";

export default function RegisterPage() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0623881675";
  const bankName = "Guaranty Trust Bank (GTBank)";
  const accountName = "6THTOUCH ROBOTICS ACADEMY";
  const trainingFee = "₦25,000";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
     <div className="w-full mt-20 py-12 font-sans bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-left text-black">
              <p className="text-xs uppercase font-semibold tracking-wider mb-2">
                6thTouch Robotics Intensive Training Program
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FF6A00] leading-tight">
                FUTURE-PROOF YOUR SKILLS IN 2 WEEKS
              </h1>
             <p className="text-sm mb-4 leading-relaxed">
  At <span className="font-bold">6thtouch Robotics Academy</span>, we are launching our <strong>Intensive Training Program</strong> to help you future-proof your skills in just 2 weeks. 
</p>

<p className="text-sm mb-4 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-800">
  <FaCalendarDays className="inline align-middle" /> <strong>Aug 1, 2026 (2 Weeks)</strong>
  <span></span>
  <FaLocationDot className="inline align-middle" /> <strong>Girls School, Ojo Barracks, Ojo</strong>
</p>

<div className="mb-4 text-sm text-gray-800">
  <p className="font-bold mb-1 text-black">What You'll Master:</p>
  <ul className="list-disc list-inside space-y-1 pl-2">
    <li><span className="font-semibold text-black">Coding & Software Development:</span> Build real apps with AI baked in.</li>
    <li><span className="font-semibold text-black">Robotics (Arduino + LEGO):</span> Sensors, actuators, microcontrollers, and smart automation to bring circuits to life hands-on.</li>
  </ul>
</div>

<div className="mb-4 text-sm text-gray-800">
  <p className="font-bold mb-1">Why Join?</p>
  <ul className="list-none space-y-1 pl-1">
    <li className="flex items-center gap-2"><FaCircleCheck className="shrink-0" /> Build real prototypes, not just theory</li>
    <li className="flex items-center gap-2"><FaCircleCheck className="shrink-0" /> Learn alongside a team, not alone</li>
    <li className="flex items-center gap-2"><FaCircleCheck className="shrink-0" /> Get hands-on experience</li>
  </ul>
</div>
               <Link
                              href="https://forms.gle/WKDevp6nAQtUVLqE6"
                              className="inline-flex items-center justify-center bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] font-semibold text-sm transition-all duration-200 no-underline cursor-pointer"
                            >
                              Get started
                              <FaArrowUpRightFromSquare className="ml-2 text-xs" />
                            </Link>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/assets/images/6thtouch_events.jpeg"
                alt="Students learning robotics"
                className="w-full rounded-2xl shadow-md object-cover max-h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}