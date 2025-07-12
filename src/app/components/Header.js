"use client";
import { usePathname } from "next/navigation";

// src/app/components/Header.js
export default function Header() {
    return (
      <div className="flex flex-col items-center px-4 pt-12">
        <div className="flex justify-center mt-0 mb-10">
          <img 
            src="/Asset 11.svg" 
            alt="Laustin Vegas Logo" 
            className="w-[600px] h-[180px] object-fill"
          />
        </div>
        <div className="flex justify-center space-x-8 mt-0 mb-0 text-white text-med uppercase font-semibold tracking-widest uppercase">
          <a href="/" className="hover:text-red-500 transition duration-200">Home</a>
          <a href="/media" className="hover:text-red-500 transition duration-200">Media</a>
          <a href="/about" className="hover:text-red-500 transition duration-200">About</a>
        </div>
      </div>
    );
  }
  