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
    <div className="flex flex-col items-center px-4 pt-12 sm:pt-8 mb-0">
      <div className="flex justify-center mt-0 mb-2 sm:mb-2 md:mb-2">
        <Image
          src="/Asset 18.svg" 
          alt="Laustin Vegas Logo" 
            width={330}
            height={200}
            className="
            w-[50vw]              // default: half the screen width
            h-auto
            sm:w-[300px]          // small screen override
            md:w-[300px]          // medium screen
            lg:w-[300px]          // large screen
            max-w-[70%]           // never spill out of container
          "
           priority
        />
      </div>

      <div className="flex justify-center space-x-4 md:space-x-4 sm:space-x-3 mt-0 lg:mt-1 sm:mt-1 mb-2 sm:mb-2 md:mb-3 lg:mb-0
 text-sm sm:text-base md:text-base lg:text-base uppercase font-semibold tracking-wider">
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
