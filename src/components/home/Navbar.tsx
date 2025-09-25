
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <img 
            src="/logo.png" 
            alt="Pulse Robot Logo" 
            className="h-10 sm:h-12 md:h-20 w-auto" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#details" className="nav-link">Contact</a>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <Link 
              to="/sign-in"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className="px-6 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Mobile menu button - enhanced with better styling */}
        <button 
          className="md:hidden relative p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation - enhanced with glassmorphism and better UX */}
      <div className={cn(
        "fixed inset-0 z-40 bg-gradient-to-br from-white/80 via-white/70 to-orange-50/80 backdrop-blur-2xl flex flex-col md:hidden transition-all duration-500 ease-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Header with logo and close button in mobile menu */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <img 
            src="/logo.png" 
            alt="Tunisia GreenWallet Logo" 
            className="h-8 w-auto" 
          />
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">Menu</span>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-red-50/80 hover:border-red-200/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-600 hover:text-red-600 transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 py-8 space-y-2">
          <a 
            href="#" 
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-orange-50/80 hover:border-orange-200/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span className="text-lg font-semibold text-gray-800">Home</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            </div>
          </a>
          
          <a 
            href="#features" 
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-orange-50/80 hover:border-orange-200/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-lg font-semibold text-gray-800">Features</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </a>
          
          <a 
            href="#details" 
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-orange-50/80 hover:border-orange-200/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-lg font-semibold text-gray-800">Contact</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
          </a>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 space-y-3">
            <Link 
              to="/sign-in"
              className="group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-orange-50/80 hover:border-orange-200/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <span className="text-lg font-semibold text-gray-800">Sign In</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              </div>
            </Link>

            <Link 
              to="/signup"
              className="group flex items-center justify-between p-4 rounded-2xl bg-orange-500/80 backdrop-blur-sm border border-orange-400/60 hover:bg-orange-600/80 hover:border-orange-500/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-lg font-semibold text-white">Sign Up</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </Link>
          </div>
        </nav>

        {/* Footer with branding */}
        <div className="mt-auto p-6 border-t border-gray-200/50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Tunisia GreenWallet</p>
            <p className="text-xs text-gray-500">Making climate action rewarding</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
