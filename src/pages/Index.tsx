
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap, CheckCircle } from "lucide-react";
import { useBubbleAnimation } from "../hooks/useBubbleAnimation";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const bubbles = useBubbleAnimation(15);

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

  // Generate static random circles for footer decoration - only once on initial render
  const [footerCircles] = useState(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: 60 + Math.random() * 120, // Bigger circles: Random size between 60px and 180px
      left: Math.random() * 100, // Random horizontal position
      top: -30 - Math.random() * 60, // Position so only half overlaps into footer
      opacity: 0.6 + Math.random() * 0.4, // Higher opacity between 0.6 and 1.0
    }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Modern Scroll Progress Bar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-slate-200 rounded-full z-50 shadow-sm">
        <div 
          className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out w-full shadow-lg"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Bubble background */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/50 to-blue-600/60 backdrop-blur-sm"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}px`,
              opacity: bubble.opacity * 0.8,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Modern Hero Section */}
      <div className="flex-1 p-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Next-Generation Lending Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
            Welcome to Qlfy
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionising how consumers get better prequalified lending decisions with cutting-edge technology and unparalleled expertise.
          </p>
        </div>

        {/* Modern Features Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Qlfy?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the future of lending with our innovative approach to prequalification
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Our qualified professionals bring years of experience to help you succeed with personalized guidance.",
                gradient: "from-blue-500 to-cyan-500",
                link: "/about-us"
              },
              {
                icon: Target,
                title: "Targeted Solutions",
                description: "AI-powered customized approaches tailored to your specific needs and financial objectives.",
                gradient: "from-purple-500 to-pink-500",
                link: "/services"
              },
              {
                icon: Zap,
                title: "Instant Results",
                description: "Lightning-fast processes designed to deliver accurate results in seconds, not days.",
                gradient: "from-emerald-500 to-teal-500",
                link: "/contact"
              }
            ].map((feature, index) => {
              const CardComponent = (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );

              return feature.link ? (
                <Link key={index} to={feature.link} className="block h-full">
                  {CardComponent}
                </Link>
              ) : (
                CardComponent
              );
            })}
          </div>
        </div>

        {/* Modern Belief Section */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
              Our Core Beliefs
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
              {[
                {
                  title: "Consumers",
                  color: "blue",
                  items: [
                    "Need certainty about which products they can get before they apply",
                    "Know the APR that they will be offered",
                    "The credit limit on each product",
                    "See all the products available with binary decisions"
                  ]
                },
                {
                  title: "Distributors",
                  color: "purple",
                  items: [
                    "Should not be charged for the provision eligibility services",
                    "Understand why products are and are not available to their users",
                    "Be provided high performing application journeys"
                  ]
                },
                {
                  title: "Lenders",
                  color: "emerald",
                  items: [
                    "Need to understand and have control over which consumers are being filtered",
                    "Never have to expose their lending IP to 3rd parties",
                    "Should not be constrained from appearing in searches due to excessive bureau costs"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="text-left">
                  <h4 className={`text-3xl font-bold text-${section.color}-600 mb-6 flex items-center`}>
                    <div className={`w-3 h-3 bg-${section.color}-500 rounded-full mr-3`}></div>
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-slate-700 leading-relaxed">
                        <CheckCircle className={`h-5 w-5 text-${section.color}-500 mr-3 mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Static Footer Circle Decoration - overlaying into footer */}
      <div className="absolute bottom-0 left-0 right-0 h-80 overflow-hidden pointer-events-none z-30">
        {footerCircles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.left}%`,
              top: `${circle.top}px`,
              opacity: circle.opacity,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      {/* Modern Footer Section */}
      <div className="bg-slate-900 py-20 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Logo and Brand */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/0a423f79-bdf0-4da0-907e-b8c74529af94.png" 
                alt="Qlfy Logo" 
                className="h-20 w-auto mr-4 filter brightness-110"
              />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                QualifiSolutions.io
              </h2>
            </div>
          </div>

          {/* Contact and Links */}
          <div className="text-center mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <a 
                href="https://www.linkedin.com/company/qualifi-solutions/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-3 transition-colors duration-300 text-lg"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">in</span>
                </div>
                LinkedIn
              </a>
              <a href="mailto:contact@qualifisolutions.io" className="text-slate-300 hover:text-white flex items-center gap-3 transition-colors duration-300 text-lg">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <span className="text-white">✉</span>
                </div>
                contact@qualifisolutions.io
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors duration-300 text-lg">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-slate-400 hover:text-white transition-colors duration-300 text-lg">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Back to top arrow */}
          <div className="text-center mb-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 mx-auto group"
            >
              <ArrowRight className="h-6 w-6 rotate-[-90deg] group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-lg">© 2023 Qualifi Solutions ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
