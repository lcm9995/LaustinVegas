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
    <div className="flex flex-col items-center px-4 pt-12 sm:pt-8 mb-6">
      <div className="flex justify-center mt-0 mb-12 sm:mb-6 md:mb-7">
        <Image
          src="/Asset 18.svg" 
          alt="Laustin Vegas Logo" 
          width={600}
            height={180}
            className="w-full h-auto max-w-[600px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[600px]"
            priority
        />
      </div>

      <div className="flex justify-center space-x-10 md:space-x-6 sm:space-x-3 mt-0 lg:mt-4 sm:mt-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0
 text-base md:text-sm sm:text-xs uppercase font-semibold tracking-wider">
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
