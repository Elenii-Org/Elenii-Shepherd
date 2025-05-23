import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const features = [
  {
    title: "Real-Time Voice Guidance",
    description: "Navigate spaces and apps with voice-assisted feedback in real time.",
    bgColor: "#aac9dd",
  },
  {
    title: "Screen Reader Integration",
    description: "Works seamlessly with screen readers and voice control systems.",
    bgColor: "#5592bb",
  },
  {
    title: "Offline Smart Map",
    description: "Navigate confidently—even without internet access.",
    bgColor: "#aac9dd",
  },
  {
    title: "Secure and Private",
    description: "Your data stays protected with built-in privacy and encryption.",
    bgColor: "#aac9dd",
  },
];

export default function Techstars() {
  return (
    <div className="bg-[#ccdeeb] text-[#00121f] py-10 px-4">
      {/* Techstars + Logos Section */}
      <div className="flex items-center justify-center flex-wrap gap-6">
  {Array(4).fill(null).map((_, index) => (
    <div key={index} className="flex items-center space-x-2">
      <p className="text-xl">
        techstars <span className="text-3xl text-green-300">_</span>
      </p>
      <Image src="/logo.png" alt="Techstars Logo" width={120} height={120} />
    </div>
  ))}
</div>


      {/* Features Section */}
      <div className="text-center mt-12">
        <p className="text-sm text-[#2A77AA]">FEATURES</p>
        <h1 className="text-3xl font-bold mt-2 mb-4">Why Choose Elenii Shepherd?</h1>
        <p className="text-lg text-gray-800">Your smart companion for everyday independence.</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            style={{ backgroundColor: feature.bgColor }}
            className="rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative"
          >
            <GoArrowUpRight className="absolute top-4 left-4 text-[#00121f] text-2xl border border-[#f0f0f0] shadow-2xl rounded-md p-1 bg-white" />
            <h2 className="text-xl font-semibold text-[#00121f] mt-10">{feature.title}</h2>
            <p className="text-[#00121f] mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
