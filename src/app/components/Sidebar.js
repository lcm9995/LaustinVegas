"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div classname="border-r border-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-9 left-14 z-70 p-2"
        >
          <div className="w-14 h-2 bg-white mb-3" />
          <div className="w-14 h-2 bg-white mb-3" />
          <div className="w-14 h-2 bg-white mb-3" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 botton-15 h-full w-48 bg-black border-r border-white z-60 p-4 space-y-4">
          <div className="fixed top-30 left-12 botton-15 h-full w-33 bg-black z-70 p-4 space-y-4">
            <Link href="/" className="block text-white hover:underline">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:underline">
              About
            </Link>
            <Link href="/music" className="block text-white hover:underline">
              Music
            </Link>
            <Link href="/contact" className="block text-white hover:underline">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
