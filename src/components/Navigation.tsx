
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-50 shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8ba74544-554d-4d02-935f-9dedc0361106.png" 
            alt="Qlfy Logo" 
            className="h-12 w-auto"
          />
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/about-us">
          <Button variant="ghost">About Us</Button>
        </Link>
        <Link to="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
