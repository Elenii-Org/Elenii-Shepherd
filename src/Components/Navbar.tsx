"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#80AECC] px-4 py-2 flex items-center justify-between relative">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <Image
          src="/logofram.png"
          alt="Logo"
          width={80}
          height={50}
          className="object-contain m-0 p-0"
        />
        <h1 className="text-2xl font-bold text-[#00121f] m-0 p-0 leading-none ml-2">
          Elenii Shepherd
        </h1>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-[#00121f] text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-[#00121f] font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">How it Works</li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <Link href="/contact">
          <button className="bg-[#2A77AA] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#80AECC] flex flex-col items-center space-y-4 py-4 md:hidden text-[#00121f] font-medium z-50">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">How it Works</a>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact">
            <button className="bg-[#2A77AA] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
