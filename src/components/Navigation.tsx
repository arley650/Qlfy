
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-40">
      <div className="flex items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/bdadbcfa-ca89-48eb-a521-86ecd0fd3b8f.png" 
            alt="Qlfy Logo" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      <div className="flex items-center space-x-2">
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
