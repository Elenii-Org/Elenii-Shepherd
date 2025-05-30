import Image from "next/image";

export default function HowItWork() {
  const steps = [
    {
      step: "01",
      title: "Download Elenii Shepherd app",
      desc: "Get it free from the Google Play Store or Apple App Store.",
    },
    {
      step: "02",
      title: "Create your profile",
      desc: "Personalize the experience to suit your needs and level of vision.",
    },
    {
      step: "03",
      title: "Start navigating with ease",
      desc: "Voice, touch, and vibration help you move, read, and connect—independently.",
    },
  ];

  return (
    <section className="bg-[#80aecc] py-12 px-4">
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 px-2 sm:px-6">
        <div className="max-w-full md:max-w-md">
          <h1 className="text-lg sm:text-xl text-[#2A77AA] font-semibold">How it works</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00121f] mt-2 leading-tight">
            Get Started in Minutes
          </h2>
          <p className="mt-3 text-[#00121f] text-sm sm:text-base">
            Just three simple steps to start experiencing the world independently
          </p>
        </div>
        <button className="bg-[#2A77AA] px-5 py-2.5 text-base sm:text-lg font-bold rounded-full text-[#00121f] whitespace-nowrap hover:bg-[#195b86] transition">
          Get started
        </button>
      </div>

      <div className="bg-[#ccdeeb] shadow-2xl rounded-lg p-6 sm:p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
        {/* Steps */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map(({ step, title, desc }) => (
            <div
              key={step}
              className="px-3 sm:px-4 border-b sm:border-b-0 sm:border-r border-gray-400 last:border-r-0 last:border-b-0"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-400">{step}</h1>
              <h2 className="text-lg sm:text-xl font-semibold text-[#00121f] mt-2">{title}</h2>
              <p className="mt-1 sm:mt-2 text-[#00121f] text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex justify-center md:justify-end pt-6 md:pt-0">
          <Image
            src="/QRcode.png"
            alt="Download QR Code"
            width={180}
            height={180}
            className="rounded-md shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
