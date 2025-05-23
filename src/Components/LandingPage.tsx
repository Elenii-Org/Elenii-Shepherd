"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function LandingPage() {
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false);

  const handleDownloadClick = () => {
    // Opens Google Play store link in new tab (example)
    window.open("https://play.google.com/store/apps/details?id=your.app.id", "_blank");
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
    <div className="bg-[#80AECC] px-4 md:px-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="right-10 mt-6 lg:w-1/2 space-y-6 text-center lg:text-left">
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00121f]">
            Empowering Vision, Enabling Independence
          </h1>

          <p className="text-[#00121f] text-lg">
            The easiest and fastest way for visually impaired individuals to
            access information, navigate spaces, and interact with the world
            using smart, inclusive technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleDownloadClick}
              className="flex items-center gap-3 bg-[#2A77AA] text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaGooglePlay size={30} />
              <FaApple size={30} className="text-[#00121f]" />
              <span className="text-[#00121f] font-bold">Download App</span>
            </button>

            <button
              onClick={handleLearnMoreClick}
              className="text-[#00121f] font-bold border border-[#2A77AA] px-6 py-3 rounded-full hover:bg-white transition"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center mt-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <img
                src="/user1.png"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/user2.png"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/user3.png"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-[#00121f] text-sm font-medium ml-6">
              Trusted by thousands of users worldwide to <br /> improve daily
              living
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2">
          <img
            src="/heroimage.png"
            alt="Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
