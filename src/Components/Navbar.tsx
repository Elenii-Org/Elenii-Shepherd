"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#80AECC] shadow-md px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={208}  // adjust width and height as needed
          height={128}
          className="object-contain"
        />
      </div>

      {/* Hamburger Icon (visible on small screens) */}
      <button
        className="md:hidden text-[#00121f] text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links (Desktop) */}
      <ul className="top-48 hidden md:flex space-x-6 text-[#00121f] font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">How it Works</li>
        <Link href="/about"><li className="hover:text-blue-600 cursor-pointer">About</li></Link>
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contact"><button className="bg-[#2A77AA] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm">
          Contact Us
        </button></Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#80AECC] flex flex-col items-center space-y-4 py-4 md:hidden text-[#00121f] font-medium">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">How it Works</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <button className="bg-[#2A77AA] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
