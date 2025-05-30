"use client";

import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-[#ccdeeb] flex flex-col items-center justify-center py-8 px-2 sm:px-4 lg:px-6">
      {/* Top Heading */}
      <div className="mb-6 text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-[#2A77AA]">CONTACT US</h1>
        <p className="text-lg text-[#00121f] mb-1">We&rsquo;d love to hear from you.</p>
        <p className="text-gray-600">
          Whether you have a question, need support, or want to partner with us.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-2.5 items-stretch min-h-[500px]">
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <div className="w-full h-full max-w-md relative rounded-lg shadow-md overflow-hidden">
            <Image
              src="/contactimage.jpg"
              alt="Contact illustration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex justify-center items-center mt-8">
          <form className="w-full max-w-md h-full p-4 flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in touch!</h2>
              <p className="text-gray-600">
                Fill out the form and we will contact you within 24 hours.
              </p>

              <div className="mb-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border bg-white text-[#00121f] rounded px-3 py-2 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border bg-white text-[#00121f] rounded px-3 py-2 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border bg-white rounded px-3 py-2 focus:outline-none text-[#00121f]"
                  placeholder="Write your message..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#2A77AA] text-white flex justify-between px-5 py-2.5 mb-20 rounded-full hover:bg-blue-700 transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-[#5592BB] mt-10 shadow-2xl rounded-lg p-8 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Text Section */}
        <div className="mt-4 lg:mt-8">
          <h1 className="text-2xl font-bold text-[#00121f] mb-2 py-2">
            Download the Elenii Shepherd app
          </h1>
          <p className="mb-4 text-[#00121f] py-3">
            Scan this QR code to get started instantly. Available on Android &amp; iOS.
          </p>
          <button
            className="flex items-center gap-3 bg-[#004D80] text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition"
            aria-label="Download the Elenii Shepherd app"
          >
            <FaGooglePlay size={30} />
            <FaApple size={30} className="text-[#00121f]" />
            <span className="text-[#00121f] font-bold">Download App</span>
          </button>
        </div>

        {/* QR Code */}
        <div className="flex-shrink-0">
          <img
            src="/QRcode.png"
            alt="QR code to download Elenii Shepherd app"
            className="max-w-xs w-full"
          />
        </div>
      </div>
    </section>
  );
}
