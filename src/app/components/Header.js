"use client";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="flex flex-col items-center px-4 pt-12 sm:pt-8 mb-2">
      <div className="flex justify-center mt-0 mb-12 sm:mb-6 md:mb-7">
        <Image
          src="/Asset 18.svg" 
          alt="Laustin Vegas Logo" 
            width={500}
            height={180}
            className="
            w-[50vw]              // default: half the screen width
            h-auto
            sm:w-[160px]          // small screen override
            md:w-[220px]          // medium screen
            lg:w-[400px]          // large screen
            max-w-[90%]           // never spill out of container
          "
           priority
        />
      </div>

      <div className="flex justify-center space-x-10 md:space-x-6 sm:space-x-2 mt-0 lg:mt-4 sm:mt-2 mb-2 sm:mb-2 md:mb-3 lg:mb-0
 text-sm sm:text-base md:text-md lg:text-md uppercase font-semibold tracking-wider">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
          <span
            className={`transition duration-200 hover:text-gray-400 ${
              pathname === item.href ? "text-red-500" : "text-white"
            }`}
          >
            {item.label}
          </span>
        </Link>
        ))}
      </div>
    </div>
  );
}
