"use client";

import Image from "next/image";
import { RiVoiceprintFill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { IoIosRadio } from "react-icons/io";
import { MdOutlineSmartScreen, MdCalculate } from "react-icons/md";

export function Techstars() {
  const renderCard = (
    title: string,
    description: string,
    bgColor: string,
    Icon: React.ElementType,
    width: string = "w-full sm:w-[300px] lg:w-[320px]"
  ) => (
    <article
      className={`${width} rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.03] transition-transform`}
      style={{ backgroundColor: bgColor }}
      aria-label={title}
    >
      <div className="mb-4 w-12 h-12 bg-white text-gray-500 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-[#00121f]">{title}</h3>
      <p className="text-[#00121f] mt-2">{description}</p>
    </article>
  );

  return (
    <section className="bg-[#ccdeeb] text-[#00121f] py-10 px-4" aria-labelledby="features-title">
      {/* Logo section */}
      <div className="flex overflow-x-auto md:flex-wrap gap-6 items-center justify-start md:justify-center px-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2 flex-shrink-0">
            <p className="text-xl">
              techstars <span className="text-3xl text-green-300">_</span>
            </p>
            <Image src="/logo.webp" alt="Techstars Logo" width={200} height={190} />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mt-12 max-w-xl mx-auto">
        <p className="text-sm text-[#2A77AA]">FEATURES</p>
        <h2 id="features-title" className="text-3xl font-bold mt-2 mb-4">
          Why Choose Elenii Shepherd?
        </h2>
        <p className="text-lg">Your smart companion for everyday independence.</p>
      </div>

      {/* Feature cards */}
      <div className="mt-10 max-w-7xl mx-auto space-y-8 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {renderCard("Real-Time Voice Guidance", "Navigate spaces and apps with voice-assisted feedback in real time.", "#aac9dd", RiVoiceprintFill)}
          {renderCard("Screen Reader Integration", "Works seamlessly with screen readers and voice control systems.", "#5592bb", MdCalculate)}
          {renderCard("Offline Smart Map", "Navigate confidently—even without internet access.", "#aac9dd", MdOutlineSmartScreen)}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {renderCard("Radio", "Your data stays protected with built-in privacy and encryption.", "#aac9dd", IoIosRadio, "w-full sm:w-[300px] lg:w-[480px]")}
          {renderCard("News & Blog", "Stay updated with automatic alerts and changes in real-time.", "#5592bb", LuNewspaper, "w-full sm:w-[300px] lg:w-[480px]")}
        </div>
      </div>
    </section>
  );
}
