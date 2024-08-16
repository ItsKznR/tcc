import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import React, { useState, useEffect } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg sticky top-0 z-10 transition-transform duration-300 ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-1 flex items-center h-20">
        {/* Left side: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="inline-block">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>

        {/* Center: Menu items */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-white text-lg font-medium">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/projeto" className="hover:underline">Projeto</Link>
          <Link to="/objetivo" className="hover:underline">Objetivo</Link>
        </div>

        {/* Right side: Button */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link to="/quem-somos">
            <button className="bg-white text-teal-600 py-2 px-6 rounded-full hover:bg-gray-200 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Sobre Nós
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gradient-to-r from-blue-600 to-teal-400 text-white`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/home" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/projeto" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>Projeto</Link>
          <Link to="/objetivo" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>Objetivo</Link>
          <Link to="/quem-somos">
            <button className="bg-white text-teal-600 py-2 px-6 rounded-full hover:bg-gray-200 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-xl" onClick={() => setIsMenuOpen(false)}>
              Sobre Nós
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
