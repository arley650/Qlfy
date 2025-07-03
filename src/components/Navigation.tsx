
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-40 relative overflow-hidden">
      {/* Wave animation background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-[wave_8s_ease-in-out_infinite] transform -translate-x-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-[wave_6s_ease-in-out_infinite_reverse] transform translate-x-full"></div>
      </div>
      
      <div className="flex items-center relative z-10">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/eca94cef-dac6-4155-b816-22d7bc48dede.png" 
            alt="Qlfy Logo" 
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      <div className="flex items-center space-x-2 relative z-10">
        <Link to="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 font-medium">
            Home
          </Button>
        </Link>
        <Link to="/about-us">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 font-medium">
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
