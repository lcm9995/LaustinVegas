"use client";
import { usePathname } from "next/navigation";

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
        <img 
          src="/Asset 18.svg" 
          alt="Laustin Vegas Logo" 
          className="w-[600px] h-[180px] lg:w-[600px] lg:h-[180px] sm:w-[200px] sm:h-[160px] md:w-[300px] md:h-[300px] object-fill"
        />
      </div>

      <div className="flex justify-center lg:space-x-10 md:space-x-8 sm:space-x-5 mt-0 lg:mt-4 mb-0 lg:text-med md:text-med sm:text-sm uppercase font-semibold tracking-widest">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`transition duration-200 hover:text-gray-400 ${
              pathname === item.href ? "text-red-500" : "text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
