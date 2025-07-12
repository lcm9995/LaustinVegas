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
    <div className="flex flex-col items-center px-4 pt-12">
      <div className="flex justify-center mt-0 mb-10">
        <img 
          src="/Asset 11.svg" 
          alt="Laustin Vegas Logo" 
          className="w-[600px] h-[180px] object-fill"
        />
      </div>

      <div className="flex justify-center space-x-8 mt-0 mb-0 text-med uppercase font-semibold tracking-widest">
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
