"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Quality", href: "/quality" },
  { name: "Export", href: "/export" },
  { name: "Contact", href: "/contact" },
]; 

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-gradient-to-l from-green-700 to-gray-800 text-white shadow-lg" style={{ top: "65px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-bold tracking-widest">
            Miracle Traders
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="hover:text-gray-300 transition">
              <Search size={24} />
            </button>

            <button className="hover:text-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

  <button className="relative hover:text-gray-300 transition">
            
    <Heart size={24} />
    <span className="absolute -top-1 -right-1 bg-red-600 px-1.5 py-0.5 text-xs rounded-full text-white">
      0
    </span>

  </button>

            <button className="relative hover:text-gray-300 transition">
              <Link href="/cart">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 bg-red-600 px-1.5 py-0.5 text-xs rounded-full text-white">
                0
              </span>
              </Link>
            </button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                className="text-white hover:bg-green-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-700 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-gray-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
