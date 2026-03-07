"use client";

import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import LogoBlack from "@/assets/logo/logo-white.svg"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="relative overflow-hidden bg-[#E5E5E5]">

        {/* Full-width Datapix watermark */}
        <div
          className="absolute inset-0 flex items-start justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-black tracking-[-2%] whitespace-nowrap text-transparent bg-clip-text"
            style={{
              fontSize: "27vw",
              lineHeight: 1,
              fontFamily: "var(--font-urbanist, sans-serif)",
              backgroundImage: "linear-gradient(0deg, rgba(0, 0, 2, 0) 0%, rgba(41, 44, 46, 0.1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Datapix
          </span>
        </div>

        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-40 md:pb-40">
          <div className="flex flex-col items-center gap-6">

            {/* Datapix Logo icon */}
            <div
              className="w-[81px] h-[73px] rounded-[14.56px] bg-[#101828] flex items-center justify-center relative"
              style={{
                boxShadow:
                  "0 1.566px 2.535px rgba(0,0,0,0.087), 0 10.426px 16.874px rgba(255,80,0,0.18), 0 25.483px 37.77px rgba(255,80,0,0.22), 0 0.455px 0.91px rgba(255,80,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image src={LogoBlack} alt="Datapix" width={50} height={50} />
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center gap-2 text-center mt-2">
              <h2
                className="font-urbanist text-datapix-main text-3xl sm:text-[2rem] font-semibold leading-snug"
              >
                Get connected
                <br />
                on social
              </h2>
              <p className="text-[#71717A] text-sm">
                Don&apos;t miss our new updates!
              </p>
            </div>

            {/* Social cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full">

              {/* Facebook */}
              <div className="flex items-center gap-4 w-full max-w-[200px] bg-[#F4F4F5] rounded-[24px] px-5 h-[72px] shadow-[0_8px_16px_rgba(0,0,0,0.12),0_3px_3px_rgba(0,0,0,0.1)]">
                <span className="flex-1 text-[#101828] text-base font-semibold">
                  Facebook
                </span>
                <button
                  type="button"
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#101828] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-[13px] h-[13px]" />
                </button>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 w-full max-w-[210px] bg-[#F4F4F5] rounded-[24px] px-5 h-[72px] shadow-[0_8px_16px_rgba(0,0,0,0.12),0_3px_3px_rgba(0,0,0,0.1)]">
                <span className="flex-1 text-[#101828] text-base font-semibold">
                  Instagram
                </span>
                <button
                  type="button"
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#101828] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-[13px] h-[13px]" />
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 w-full max-w-[195px] bg-[#F4F4F5] rounded-[24px] px-5 h-[72px] shadow-[0_8px_16px_rgba(0,0,0,0.12),0_3px_3px_rgba(0,0,0,0.1)]">
                <span className="flex-1 text-[#101828] text-base font-semibold">
                  Linkedin
                </span>
                <button
                  type="button"
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#101828] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[13px] h-[13px]" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(212,212,216,0.35) 50%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">

              <div className="flex items-center gap-6 order-2 sm:order-1">
                <a href="#" className="text-datapix-main hover:text-white font-medium transition-colors">Impressum</a>
                <a href="#" className="text-datapix-main hover:text-white font-medium transition-colors">Datenschutz</a>
                <a href="#" className="text-datapix-main hover:text-white font-medium transition-colors">Cookies</a>
              </div>

              <p className="text-[#71717A] order-1 sm:order-2">
                © {new Date().getFullYear()} Datapix. All Rights Reserved.
              </p>

              <a
                href="#"
                className="flex items-center gap-2 text-datapix-main hover:text-white font-medium transition-colors order-3"
                aria-label="Back to top"
              >
                Back to top
                <ArrowUp className="w-4 h-4" strokeWidth={2} />
              </a>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}