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
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h1 className="text-xl text-[#2A77AA]">How it works</h1>
          <h2 className="text-3xl font-bold text-[#00121f] mt-2">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-[#00121f]">
            Just three simple steps to start experiencing the world
            independently
          </p>
        </div>
        <button className="bg-[#2A77AA] px-6 py-3 text-lg font-bold rounded-full text-[#00121f] whitespace-nowrap">
          Get started
        </button>
      </div>

      {/* Steps + QR Code section */}
      <div className="bg-[#ccdeeb] shadow-2xl rounded-lg p-8 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 items-start">
        {/* Steps */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="px-4 border-r border-gray-400 last:border-r-0">
              <h1 className="text-4xl font-bold text-gray-400">{step}</h1>
              <h2 className="text-xl font-semibold text-[#00121f] mt-2">{title}</h2>
              <p className="mt-2 text-[#00121f]">{desc}</p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/QRcode.png" // Replace with your QR code image path
            alt="Download QR Code"
            width={200}
            height={200}
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Video section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <video
          className="w-full h-auto rounded-lg shadow-md py-2"
          controls
          poster="/image.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
