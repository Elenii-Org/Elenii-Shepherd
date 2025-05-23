"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function LandingPage() {
  const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false);

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
    <>
      <div className="bg-[#80AECC] px-4 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="right-10 mt-6 lg:w-1/2 space-y-6 text-center lg:text-left">
            <button
              onClick={toggleAccessibilityInfo}
              className="bg-white text-[#2A77AA] px-4 py-2 rounded-full font-semibold"
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
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=your.app.id",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 bg-[#2A77AA] text-white font-bold px-5 py-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaGooglePlay size={24} />
                <span>Google Play</span>
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/app/idYOUR_APP_ID",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 bg-[#2A77AA] text-white font-bold px-5 py-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaApple size={24} />
                <span>App Store</span>
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

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="bg-[#f1f9ff] py-12 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00121f] mb-4">
            How It Works
          </h2>
          <p className="text-[#00121f] text-lg mb-6">
            Three simple steps to get started with Elenii Shepherd.
          </p>

          {/* Example Steps */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#2A77AA] text-xl mb-2">
                1. Download
              </h3>
              <p className="text-[#00121f]">
                Get the app from the Google Play or Apple App Store.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#2A77AA] text-xl mb-2">
                2. Set Up
              </h3>
              <p className="text-[#00121f]">
                Follow easy onboarding steps designed for visual accessibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#2A77AA] text-xl mb-2">
                3. Navigate
              </h3>
              <p className="text-[#00121f]">
                Use smart features to explore, understand, and live
                independently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
