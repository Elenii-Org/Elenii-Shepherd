"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";export function LandingPage() {
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false);

  const handleDownloadClick = () => alert("Redirecting to app download options...");

  const handleLearnMoreClick = () => {
    const section = document.getElementById("how-it-works");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#80AECC] px-4 sm:px-6 lg:px-12 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-screen-xl mx-auto">
        <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
          <button onClick={() => setShowAccessibilityInfo(!showAccessibilityInfo)} className="bg-white text-[#2A77AA] px-4 py-2 rounded-full font-semibold text-sm">ACCESSIBILITY SOLUTION</button>
          {showAccessibilityInfo && (
            <div id="accessibility-info" className="mt-3 p-4 bg-white text-[#00121f] rounded shadow text-sm" role="region" aria-live="polite">
              Our solution is designed with inclusivity in mind.
            </div>
          )}
          <h1 className="text-4xl font-bold text-[#00121f] leading-tight">Empowering Vision, Enabling Independence</h1>
          <p className="text-sm text-[#00121f]">The easiest and fastest way for visually impaired individuals to access information, navigate spaces, and interact with the world.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button onClick={handleDownloadClick} className="flex items-center gap-2 bg-[#2A77AA] text-white font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition text-sm">
              <FaGooglePlay size={20} /> <FaApple size={20} /> <span>Download the App</span>
            </button>
            <button onClick={handleLearnMoreClick} className="text-[#00121f] font-bold border border-[#2A77AA] px-5 py-2.5 rounded-full hover:bg-white transition text-sm">Learn More</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src="/image3.webp" alt="Hero" width={500} height={500} className="w-[85%] max-w-lg object-contain" />
        </div>
      </div>
    </div>
  );
}