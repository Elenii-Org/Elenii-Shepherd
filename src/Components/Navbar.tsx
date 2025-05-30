"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#80AECC] px-4 py-2 flex items-center justify-between relative z-50">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/logofram.png"
            alt="Logo"
            width={200}
            height={120}
            className="object-contain"
          />
        </Link>
        <h1 className="text-lg sm:text-xl font-bold text-[#00121f] leading-none">
          Elenii Shepherd
        </h1>
      </div>

      {/* Hamburger Icon */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-[#00121f] text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-[#00121f] font-medium">
        <li>
          <Link href="/features" className="hover:text-blue-600 transition">
            Features
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" className="hover:text-blue-600 transition">
            How it Works
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
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
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#80AECC] flex flex-col items-center space-y-4 py-6 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/features"
          className="hover:text-blue-600 text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href="/how-it-works"
          className="hover:text-blue-600 text-lg"
          onClick={() => setMenuOpen(false)}
        >
          How it Works
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-600 text-lg"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <button className="bg-[#2A77AA] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
