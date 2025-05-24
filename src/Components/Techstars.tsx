import Image from "next/image";
import { RiVoiceprintFill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { IoIosRadio } from "react-icons/io";

const features = [
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
    icon: null,
  },
  {
    title: "Offline Smart Map",
    description: "Navigate confidently—even without internet access.",
    bgColor: "#aac9dd",
    icon: IoIosRadio,
  },
  {
    title: "News & Blog",
    description: "Your data stays protected with built-in privacy and encryption.",
    bgColor: "#aac9dd",
    icon: LuNewspaper,
  },
  {
    title: "Real-Time Updates",
    description: "Stay updated with automatic alerts and changes in real-time.",
    bgColor: "#5592bb",
    icon: RiVoiceprintFill,
  },
];

export default function Techstars() {
  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3);

  const renderCard = (feature, key, width = "w-full sm:w-[300px] lg:w-[320px]") => {
    const Icon = feature.icon;
    return (
      <div
        key={key}
        className={`${width} rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300`}
        style={{ backgroundColor: feature.bgColor }}
      >
        {Icon && (
          <div className="mb-4 w-12 h-12 bg-white text-gray-500 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h2 className="text-xl font-semibold text-[#00121f]">{feature.title}</h2>
        <p className="text-[#00121f] mt-2">{feature.description}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#ccdeeb] text-[#00121f] py-10 px-4">
      {/* Logos */}
      <div className="flex items-center justify-center flex-wrap gap-6">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <p className="text-xl">
                techstars <span className="text-3xl text-green-300">_</span>
              </p>
              <Image src="/logo.png" alt="Techstars Logo" width={120} height={120} />
            </div>
          ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12">
        <p className="text-sm text-[#2A77AA]">FEATURES</p>
        <h1 className="text-3xl font-bold mt-2 mb-4">Why Choose Elenii Shepherd?</h1>
        <p className="text-lg text-gray-800">Your smart companion for everyday independence.</p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 max-w-7xl mx-auto space-y-8 px-4">
        {/* Top Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {topRow.map((feature, idx) =>
            renderCard(feature, idx)
          )}
        </div>

        {/* Bottom Row (smaller widths) */}
        <div className="flex flex-wrap justify-center gap-6">
          {bottomRow.map((feature, idx) =>
            renderCard(feature, idx + topRow.length, "w-full sm:w-[260px] lg:w-[300px]")
          )}
        </div>
      </div>
    </div>
  );
}
