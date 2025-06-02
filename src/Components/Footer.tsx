import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

export function Footer() {
  return (
    <footer className="bg-[#ccdeeb] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="sm:col-span-2">
          <h1 className="text-lg sm:text-xl font-bold mb-3 text-[#00121f]">About Elenii Shepherd</h1>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            We believe accessibility is a right, not a luxury. Vision Helper empowers individuals with visual impairments by turning everyday smartphones into smart accessibility devices.
          </p>
          <div className="flex gap-4 text-xl text-[#00121f]">
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-600 transition" /></a>
            <a href="#" aria-label="Instagram"><CiInstagram className="hover:text-pink-400 transition" /></a>
            <a href="#" aria-label="GitHub"><FaGithub className="hover:text-gray-400 transition" /></a>
          </div>
        </div>
        <div>
          <h1 className="font-semibold mb-3 text-[#00121f]">Company</h1>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-3 text-[#00121f]">Help</h1>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:underline">Terms &amp; Condition</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-3 text-[#00121f]">Resources</h1>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">Accessibility Guide</a></li>
            <li><a href="#" className="hover:underline">Video Tutorial</a></li>
            <li><a href="#" className="hover:underline">How it works</a></li>
            <li><a href="#" className="hover:underline">Voice Command Cheatsheet</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; 2025 festcreates, Inc. All rights reserved.
      </div>
    </footer>
  );
}