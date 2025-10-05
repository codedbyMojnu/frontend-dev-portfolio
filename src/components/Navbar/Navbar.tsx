"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-purple-900 shadow-lg py-2" : "bg-purple-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            Md. Mojnu Miah
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1F6u9f7OPA22D-r0r4P5rSrbPeHPiRSbg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://drive.google.com/file/d/1eQK1b2FL0uVJ_2298l9A1PCJsKnBswyr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
