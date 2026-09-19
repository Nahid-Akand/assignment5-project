import { useState } from "react";
import logoText from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          type="button"
         onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost btn-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"  >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"  viewBox="0 0 24 24"  stroke="currentColor" >
     <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoText}
            alt="DevStack logo"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                link.label === "Home"
                  ? "text-[#DB2777]"
                  : "text-slate-600 hover:text-[#DB2777]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#DB2777] sm:block">
            Sign In
          </button>
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  link.label === "Home"
                    ? "bg-pink-50 text-[#DB2777]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#DB2777]"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Sign In */}
            <button className="mt-2 w-fit px-3 py-3 text-left text-sm font-medium text-slate-600 transition-colors hover:text-[#DB2777]">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}