
/**
 * Navigation Component
 * 
 * A responsive navigation bar with glassmorphism effects that includes:
 * - Company logo with hover animations
 * - Navigation links (Home, About Us, Contact Us)
 * - Sticky positioning with backdrop blur
 * - Mobile-optimized spacing and sizing
 * - Gradient background overlay
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    // Main navigation container with sticky positioning and backdrop blur effects
    <nav className="relative flex items-center justify-between p-4 md:p-6 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-40 overflow-hidden">
      {/* Gradient background overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-pink-50 opacity-30"></div>
      
      {/* White background specifically behind the logo for better contrast */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-white"></div>
      
      {/* Logo container with proper z-index and flex-shrink prevention */}
      <div className="relative flex items-center z-10 flex-shrink-0">
        <Link to="/" className="flex items-center group">
          {/* Company logo with responsive sizing and hover scale animation */}
          <img 
            src="/lovable-uploads/eca94cef-dac6-4155-b816-22d7bc48dede.png" 
            alt="Qlfy Logo" 
            className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      {/* Navigation buttons container with responsive spacing */}
      <div className="relative flex items-center space-x-1 md:space-x-2 z-10 flex-shrink-0">
        {/* Home navigation button */}
        <Link to="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 font-medium text-sm md:text-base px-2 md:px-4">
            Home
          </Button>
        </Link>
        
        {/* About Us navigation button */}
        <Link to="/about-us">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 font-medium text-sm md:text-base px-2 md:px-4">
            About Us
          </Button>
        </Link>
        
        {/* Contact Us button with gradient background for emphasis */}
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm md:text-base px-3 md:px-6">
            Contact Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
