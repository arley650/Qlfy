
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-50 shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Qlfy
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/team">
          <Button variant="ghost">Our Team</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
