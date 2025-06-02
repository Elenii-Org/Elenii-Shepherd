import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[#ccdeeb] py-12 px-4" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top heading and logo for small screens */}
        <div className="flex items-center gap-4 mb-8 md:hidden">
          <Link href="/" className="hover:opacity-80 transition">
            <Image
              src="/logofram.png"
              alt="Logo"
              width={200}
              height={120}
              className="object-contain"
            />
          </Link>
          <h1
            id="about-title"
            className="text-2xl font-bold text-[#00121f]"
          >
            About us
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Image */}
          <div className="relative h-[500px] w-full rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/aboutimage.webp"
              alt="People using Elenii Shepherd app"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center h-full">
            {/* Heading and logo for medium+ screens */}
            <div className="hidden md:flex items-center gap-4 mb-4">
              <Link href="/" className="hover:opacity-80 transition">
                <Image
                  src="/logofram.png"
                  alt="Logo"
                  width={60}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <h1
                id="about-title"
                className="text-3xl font-bold text-[#00121f]"
              >
                About us
              </h1>
            </div>

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
              doesn&apos;t mean losing access.
              <br /><br />
              Driven by empathy. Built with purpose. Designed for independence. Join a
              growing community committed to redefining accessibility and digital freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
