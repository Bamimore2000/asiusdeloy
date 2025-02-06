"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react"; // Icons
import Button from "../ui/Button/Button";
import { navLinks } from "@/constants/navLink";

const activePaths = ["/about", "/services", "/contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-white shadow-md"
          : activePaths.includes(pathname)
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="wrapper flex justify-between items-center py-4 ">
        <div className="menu-logo flex gap-5 items-center">
          {/* Hamburger Menu Button */}
          <button
            className="hidden lg:flex flex-col gap-[6px] z-50"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-[3px] bg-black rounded"></div>
            <div className="w-6 h-[3px] bg-black rounded"></div>
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[150px]"
              src="/images/logo.webp"
              alt="Company Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:hidden flex gap-6">
          <NavLinks data={navLinks} />
        </div>

        <Button
          primary={true}
          className="bg-secondary-700 sm:text-base lg:bg-gray-50 lg:border border-gray-700 lg:text-black text-white"
          text="Book a service"
        />
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-[100] shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button className="pl-2" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className={`block px-4 py-2 text-lg rounded transition ${
                  pathname === item.url ? "text-gray-700" : "text-inherit"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (click to close) */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};
export default Header;

const NavLinks: React.FC<{ data: { url: string; name: string }[] }> = ({
  data,
}) => {
  return (
    <ul className="flex gap-6">
      {data.map((item, index) => (
        <li key={index}>
          <Link
            href={item.url}
            className="hover:underline px-3 py-2 rounded-md"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
