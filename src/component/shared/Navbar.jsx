
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarCounters from "./NavbarCounters";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/exercise");

  const isMyPlanActive = pathname.startsWith("/my-plan");

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="border-b border-[#25282d] bg-[#0b0c0e]">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              className="h-8 w-8 rounded-full object-cover"
            />

            <h2 className="font-oswald text-lg font-bold tracking-wide">
              FITLOG
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 font-inter text-sm transition ${
                isWorkoutActive
                  ? "bg-[#151817] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#151817] hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 font-inter text-sm transition ${
                isMyPlanActive
                  ? "bg-[#151817] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#151817] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-2">
            <NavbarCounters />

            {/* Hamburger Button: Mobile Only */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#30343a] text-white transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                /* Close Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex flex-col gap-2 border-t border-[#25282d] py-3 md:hidden">
            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 font-inter text-sm transition ${
                isWorkoutActive
                  ? "bg-[#151817] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#151817] hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 font-inter text-sm transition ${
                isMyPlanActive
                  ? "bg-[#151817] text-[#ccff00]"
                  : "text-gray-400 hover:bg-[#151817] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

