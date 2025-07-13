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
    <div className="flex flex-col items-center px-4 pt-12 sm:pt-8">
      <div className="flex justify-center mt-0 mb-12 sm:mb-6 md:mb-7">
        <Image
          src="/Asset 18.svg" 
          alt="Laustin Vegas Logo" 
          width={600}
            height={180}
            className="w-[80vw] h-auto max-w-[600px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[600px]"
            priority
        />
      </div>

      <div className="flex justify-center lg:space-x-10 md:space-x-8 sm:space-x-5 mt-0 lg:mt-4 mb-0 lg:text-med md:text-med sm:text-sm uppercase font-semibold tracking-widest">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition duration-200 hover:text-gray-400 ${
              pathname === item.href ? "text-red-500" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
