import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#ccdeeb] py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Image */}
        <div className="relative h-[500px] w-full rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/aboutimage.jpg"
            alt="People using Elenii Shepherd app"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-between h-[500px]">
          <div>
            <h1 className="text-3xl font-bold text-[#00121f] mb-4">About us</h1>
            <h2 className="text-2xl font-bold text-[#00121f] mb-4">
              Reimagining Independence Through Innovation
            </h2>
            <p className="text-[#00121f] mb-6 leading-relaxed text-sm md:text-base">
              At Elenii Shepherd, we believe that everyone deserves seamless access
              to the digital world. Our mission is to empower individuals with
              visual impairments by breaking down barriers and enabling effortless
              navigation, communication, and exploration through smart, inclusive
              technology.
              <br /><br />
              Our mobile application transforms smartphones into powerful tools that
              guide, inform, and support users in real-time. From voice-assisted
              navigation and offline maps to smart text readers and object recognition,
              Elenii Shepherd opens up a new realm of possibilities—where vision loss
              doesn't mean losing access.
              <br /><br />
              Driven by empathy. Built with purpose. Designed for independence. Join a
              growing community committed to redefining accessibility and digital freedom.
            </p>
          </div>
          <button className="bg-[#2A77AA] text-white px-6 py-3 w-full rounded-full font-semibold hover:bg-[#195b86] transition">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
