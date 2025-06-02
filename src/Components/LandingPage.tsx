"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function LandingPage() {
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false);

  const handleDownloadClick = () => {
    // Replace with actual logic
    alert("Redirecting to app download options...");
  };

  const handleLearnMoreClick = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAccessibilityInfo = () => {
    setShowAccessibilityInfo((prev) => !prev);
  };

  return (
    <div className="bg-[#80AECC] px-4 sm:px-6 lg:px-12 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <button
            onClick={toggleAccessibilityInfo}
            className="bg-white text-[#2A77AA] px-4 py-2 rounded-full font"
            aria-expanded={showAccessibilityInfo}
            aria-controls="accessibility-info"
          >
            ACCESSIBILITY SOLUTION
          </button>

          {showAccessibilityInfo && (
            <div
              id="accessibility-info"
              className="mt-4 p-4 bg-white text-[#00121f] rounded shadow"
              role="region"
              aria-live="polite"
            >
              Our solution is designed with inclusivity in mind, providing
              easy-to-use tools for vision-impaired users to navigate and
              interact confidently.
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00121f]">
            Empowering Vision, Enabling Independence
          </h1>

          <p className="text-base sm:text-lg text-[#00121f]">
            The easiest and fastest way for visually impaired individuals to
            access information, navigate spaces, and interact with the world
            using smart, inclusive technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            {/* Combined Download Button */}
            <button
              onClick={handleDownloadClick}
              className="flex items-center justify-center gap-3 bg-[#2A77AA] text-white font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition w-full sm:w-auto"
            >
              <FaGooglePlay size={20} />
              <FaApple size={20} />
              <span>Download the App</span>
            </button>

            {/* Learn More Button */}
            <button
              onClick={handleLearnMoreClick}
              className="text-[#00121f] font-bold border border-[#2A77AA] px-5 py-2.5 rounded-full hover:bg-white transition w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center mt-6 justify-center sm:justify-start text-center sm:text-left">
            <div className="flex -space-x-3 mb-3 sm:mb-0">
              <Image
                src="/User1.webp"
                alt="User 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/User2.webp"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/User3.webp"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-[#00121f] text-xs sm:text-sm font-medium sm:ml-6">
              Trusted by thousands of users worldwide to <br /> improve daily living
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/image3.webp"
            alt="Hero"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
