"use client";
import { useState } from "react";
import Link from "next/link"

        export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
            <div className="absolute top-[4px] left-[12px] z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        {/* Bigger/thicker icon */}
        <div className="space-y-1">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-4 left-6 w-30 h-50 bg-black border border-white p-4 flex flex-col gap-2 shadow-lg">
          <div>
            <a href="#" className="text-white hover:underline">Home</a>
            <a href="#" className="text-white hover:underline">Music</a>
            <a href="#" className="text-white hover:underline">About</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
