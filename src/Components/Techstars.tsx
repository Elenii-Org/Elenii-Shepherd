import Image from "next/image";
import { RiVoiceprintFill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { IoIosRadio } from "react-icons/io";
import { MdOutlineSmartScreen, MdCalculate } from "react-icons/md";
import { FC } from "react";

type Feature = {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Real-Time Voice Guidance",
    description: "Navigate spaces and apps with voice-assisted feedback in real time.",
    bgColor: "#aac9dd",
    icon: RiVoiceprintFill,
  },
  {
    title: "Screen Reader Integration",
    description: "Works seamlessly with screen readers and voice control systems.",
    bgColor: "#5592bb",
    icon: MdCalculate,
  },
  {
    title: "Offline Smart Map",
    description: "Navigate confidently—even without internet access.",
    bgColor: "#aac9dd",
    icon: MdOutlineSmartScreen,
  },
  {
    title: "Radio",
    description: "Listen to a variety of radio stations anywhere, anytime.",
    bgColor: "#aac9dd",
    icon: IoIosRadio,
  },
  {
    title: "News & Blog",
    description: "Stay updated with automatic alerts and changes in real-time.",
    bgColor: "#5592bb",
    icon: LuNewspaper,
  },
];

const Techstars: FC = () => {
  const renderCard = (feature: Feature, key: number) => {
    const Icon = feature.icon;
    return (
      <div
        key={key}
        className="rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        style={{ backgroundColor: feature.bgColor }}
      >
        <div
          className="mb-4 w-12 h-12 bg-white text-gray-500 rounded-full flex items-center justify-center"
          aria-label={`${feature.title} icon`}
          role="img"
          title={feature.title}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-[#00121f]">{feature.title}</h2>
        <p className="text-[#00121f] mt-2">{feature.description}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#ccdeeb] text-[#00121f] py-10 px-4">
      {/* Logos */}
      <div className="flex items-center justify-center flex-wrap gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <p className="text-xl font-semibold">
              techstars <span className="text-3xl text-green-300">_</span>
            </p>
            <Image src="/logo.png" alt="Techstars Logo" width={120} height={120} />
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-sm text-[#2A77AA] font-semibold">FEATURES</p>
        <h1 className="text-3xl font-bold mt-2 mb-4">Why Choose Elenii Shepherd?</h1>
        <p className="text-lg text-[#00121f]">
          Your smart companion for everyday independence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((feature, i) => renderCard(feature, i))}
      </div>
    </div>
  );
};

export default Techstars;
