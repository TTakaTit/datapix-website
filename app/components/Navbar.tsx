'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Phone } from "lucide-react";
import logo from "@/assets/logo/logo-black.svg";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: "Leistungen", href: "#Leistungen" },
    { name: "Referenzen", href: "#Referenzen" },
    { name: "FAQ", href: "#FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));

      let currentActive = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on when you want the active state to trigger
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <nav className="bg-[#FFFFFF80] backdrop-blur-xl border border-gray-200 rounded-full shadow-[0_18px_40px_rgba(15,23,42,0.12)] p-2 transition-all duration-300">
        <div className="flex justify-between items-center h-14 pl-6 pr-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="flex items-center gap-3 group"
            >
              <Image
                src={logo}
                alt="Datapix Logo"
                className="h-7 w-auto transition-all text-datapix-main group-hover:scale-110"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-md font-semibold transition-all duration-300 relative py-1 ${isActive
                    ? 'text-red-500'
                    : 'text-datapix-main hover:text-red-400'
                    }`}
                >
                  {link.name}
                  {/* Optional underline indicator for active state */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side CTA & WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            {/* WhatsApp Button Placeholder */}
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center hover:scale-105 transition-transform shrink-0">
              {/* Replace with actual WhatsApp icon if available, using a generic MessageCircle or custom SVG for now */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#101828]">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            <a
              href="#Kontakt"
              className="bg-[#101828] text-white px-8 h-12 flex items-center justify-center rounded-full text-[15px] font-semibold hover:bg-black transition-colors"
              style={{
                boxShadow: '0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px #FFFFFF4D inset, 0px 2.77px 2.21px 0px #0000001F, 0px 6.65px 5.32px 0px #00000021, 0px 12.52px 10.02px 0px #00000022, 0px 22.34px 17.87px 0px #00000024, 0px 41.78px 33.42px 0px #00000026, 0px 100px 80px 0px #00000026, 0px 3px 3px 0px #00000024, 0px 2.77px 2.21px 0px #0000001F'
              }}
            >
              Kostenloses Erstgespräch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center mr-4">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
            >
              <span className="sr-only">Menü öffnen</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-gray-800 rounded-full" />
                <span className="block h-0.5 w-4 bg-gray-800 rounded-full" />
                <span className="block h-0.5 w-5 bg-gray-800 rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (simple list, luôn hiển thị dưới navbar) */}
      <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
        <div className="px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[12px] font-semibold transition-colors ${activeSection === link.href.replace('#', '') ? 'text-red-500' : 'text-[#101828]'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#Kontakt"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-datapix-main text-white px-4 py-2 rounded-full text-[12px] font-semibold"
          >
            <Phone size={14} className="text-white" />
            Erstgespräch
          </a>
        </div>
      </div>
    </div >
  );
};