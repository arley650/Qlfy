import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import { useBubbleAnimation } from "../hooks/useBubbleAnimation";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const bubbles = useBubbleAnimation(10);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2 h-64 bg-blue-200 rounded-full z-50">
        <div 
          className="bg-blue-600 rounded-full transition-all duration-300 ease-out w-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Bubble background */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-blue-100"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}px`,
              opacity: bubble.opacity,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="flex-1 p-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Qlfy
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Here we help consumers get better prequalified lending decisions
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Qlfy?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our qualified professionals bring years of experience to help you succeed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Targeted Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customized approaches tailored to your specific needs and objectives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Fast Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Efficient processes designed to deliver results quickly and effectively.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Belief Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-black mb-8">
            Here at Qlfy we believe....
          </h3>
          
          {/* Three belief sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-left">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Consumers:</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• Need certainty about which products they can get before they apply</li>
                <li>• Know the APR that they will be offered</li>
                <li>• The credit limit on each product</li>
                <li>• See all the products available with binary decisions</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Distributors:</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• Should not be charged for the provision eligibility services</li>
                <li>• Understand why products are and are not available to their users</li>
                <li>• Be provided high performing application journeys</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Lenders:</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• Need to understand and have control over which consumers are being filtered</li>
                <li>• Never have to expose their lending IP to 3rd parties</li>
                <li>• Should not be constrained from appearing in searches due to excessive bureau costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white py-16 mt-16 relative z-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8">
          {/* Logo and Brand */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <div className="text-white font-bold text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-1 bg-white mb-1"></div>
                    <div className="w-6 h-1 bg-white mb-1"></div>
                    <div className="w-4 h-1 bg-white mb-1"></div>
                    <div className="w-8 h-1 bg-white"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-black">QualifiSolutions.io</h2>
            </div>
          </div>

          {/* Contact and Links */}
          <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <a href="https://linkedin.com" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
                <span>🔗</span> LinkedIn
              </a>
              <a href="mailto:contact@qualifisolutions.io" className="text-black hover:text-gray-600 flex items-center gap-2">
                <span>✉️</span> contact@qualifisolutions.io
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-600">Privacy Policy</Link>
              <Link to="/terms-of-use" className="text-blue-500 hover:text-blue-600">Terms of Use</Link>
            </div>
          </div>

          {/* Back to top arrow */}
          <div className="text-center mb-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ↑
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600">© 2023 Qualifi Solutions ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
