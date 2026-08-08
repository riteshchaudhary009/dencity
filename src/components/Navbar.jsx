
import React, { useState } from "react";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Dentists", href: "#dentists" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={handleNavClick} className="shrink-0">
            <Logo markClassName="w-16 h-12 sm:w-11 sm:h-11" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+9779763255635"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition"
            >
              <Phone size={17} />
              <span>Call Us</span>
            </a>

            {/* <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral-500 text-white text-sm font-semibold hover:bg-coral-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <CalendarCheck size={17} />
              Book Appointment
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-600 transition"
                >
                  {link.name}
                </a>
              ))}

              {/* <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-3 mx-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-coral-500 text-white font-semibold hover:bg-coral-600 transition"
              >
                <CalendarCheck size={18} />
                Book Appointment
              </a> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
