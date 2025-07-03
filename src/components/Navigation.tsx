
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="relative flex items-center justify-between p-6 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-40 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-pink-50 opacity-90"></div>
      
      {/* White background behind logo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-white"></div>
      
      <div className="relative flex items-center z-10">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/eca94cef-dac6-4155-b816-22d7bc48dede.png" 
            alt="Qlfy Logo" 
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      <div className="relative flex items-center space-x-2 z-10">
        <Link to="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 font-medium">
            Home
          </Button>
        </Link>
        <Link to="/about-us">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 font-medium">
            About Us
          </Button>
        </Link>
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-6">
            Contact Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
