"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="flex justify-end pr-8">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-2 text-right">
          <li><Link href="/" className="block hover:text-gray-300">Home</Link></li>
        </ul>
      )}
    </nav>
  );
}
