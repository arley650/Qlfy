
/**
 * Homepage Component (Index.tsx)
 * 
 * This is the main landing page for Qlfy - a next-generation lending solutions platform.
 * Features include:
 * - Animated bubble background
 * - Scroll progress indicator
 * - Interactive feature cards with navigation
 * - Core beliefs section with company values
 * - Modern footer with social links and navigation
 */

// React hooks for state management and side effects
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Custom components
import Navigation from "../components/Navigation";

// Shadcn UI components for consistent design system
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Lucide React icons for visual elements
import { ArrowRight, Users, Target, Zap, CheckCircle } from "lucide-react";

// Custom hook for animated bubble background effect
import { useBubbleAnimation } from "../hooks/useBubbleAnimation";

const Index = () => {
  // State for tracking scroll progress (0-100%) for the progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Initialize 150 animated bubbles for the background effect (reduced on mobile)
  const bubbles = useBubbleAnimation(150);

  // Effect hook to calculate and update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercent = (scrollTop / docHeight) * 100; // Convert to percentage
      setScrollProgress(scrollPercent);
    };

    // Add scroll listener and cleanup on component unmount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Fixed Scroll Progress Indicator - Modern vertical progress bar on right side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-slate-200 rounded-full z-50 shadow-sm">
        <div 
          className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out w-full shadow-lg"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Bubble Background - Creates floating bubble effect behind content */}
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
              transform: 'translateX(-50%)', // Center horizontally
            }}
          />
        ))}
      </div>

      {/* Main Navigation Component */}
      <Navigation />

      {/* Main Content Container with proper z-index layering */}
      <div className="flex-1 p-4 md:p-8 relative z-10">
        
        {/* Hero Section - Main landing area with primary messaging */}
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
          {/* Badge/Tagline with icon for visual interest */}
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6 md:mb-8 opacity-50">
            <Zap className="w-4 h-4 mr-2" />
            Next-Generation Lending Solutions
          </div>
          
          {/* Main Heading with gradient text effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight">
            Welcome to Qlfy
          </h1>
          
          {/* Subtitle/Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Revolutionising how consumers get better prequalified lending decisions with cutting-edge technology and unparalleled expertise.
          </p>
        </div>

        {/* Features Section - Showcases main value propositions */}
        <div className="max-w-7xl mx-auto mb-12 md:mb-20">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Why Choose Qlfy?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Experience the future of lending with our innovative approach to prequalification
            </p>
          </div>
          
          {/* Feature Cards Grid - Responsive 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
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
                description: "We deliver targeted solutions that streamline eligibility, boost transparency, and replace outdated systems with smarter, data-driven innovation.",
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
              // Create card component with hover animations and gradient backgrounds
              const CardComponent = (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm h-full opacity-75">
                  {/* Gradient overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <CardHeader className="text-center pb-4">
                    {/* Icon with gradient background and hover scaling */}
                    <div className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 md:h-8 w-6 md:w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );

              // Conditionally wrap with Link if feature has a navigation link
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

        {/* Core Beliefs Section - Company values and philosophy */}
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20 opacity-75 px-4">
          {/* Glassmorphism container with backdrop blur effect */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 md:p-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-12">
              Our Core Beliefs
            </h3>
            
            {/* Three-column grid layout for different stakeholder beliefs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-16">
              {[
                {
                  title: "Consumers",
                  color: "blue", // Color theme for this section
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
                  {/* Section title with color-coded indicator dot */}
                  <h4 className={`text-2xl md:text-3xl font-bold text-${section.color}-600 mb-4 md:mb-6 flex items-center`}>
                    <div className={`w-3 h-3 bg-${section.color}-500 rounded-full mr-3`}></div>
                    {section.title}
                  </h4>
                  
                  {/* List of beliefs with checkmark icons */}
                  <ul className="space-y-3 md:space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-slate-700 leading-relaxed text-sm md:text-base">
                        <CheckCircle className={`h-4 md:h-5 w-4 md:w-5 text-${section.color}-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0`} />
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

      {/* Footer Section - Dark theme with company info and navigation - Mobile optimized */}
      <div className="bg-slate-900 py-8 md:py-20 mt-8 md:mt-20 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          
          {/* Brand Logo and Company Name */}
          <div className="text-center mb-8 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-8">
              <img 
                src="/lovable-uploads/0a423f79-bdf0-4da0-907e-b8c74529af94.png" 
                alt="Qlfy Logo" 
                className="h-12 md:h-20 w-auto mb-2 md:mb-0 md:mr-4 filter brightness-110"
              />
              <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                QualifiSolutions.io
              </h2>
            </div>
          </div>

          {/* Social Links and Contact Information */}
          <div className="text-center mb-8 md:mb-16">
            {/* Social media and email links with hover effects */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <a 
                href="https://www.linkedin.com/company/qualifi-solutions/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 md:gap-3 transition-colors duration-300 text-base md:text-lg"
              >
                <div className="w-8 md:w-10 h-8 md:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">in</span>
                </div>
                LinkedIn
              </a>
              <a href="mailto:contact@qualifisolutions.io" className="text-slate-300 hover:text-white flex items-center gap-2 md:gap-3 transition-colors duration-300 text-base md:text-lg">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm md:text-base">✉</span>
                </div>
                <span className="break-all">contact@qualifisolutions.io</span>
              </a>
            </div>

            {/* Legal/Policy Navigation Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors duration-300 text-base md:text-lg">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-slate-400 hover:text-white transition-colors duration-300 text-base md:text-lg">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Back to Top Button - Smooth scroll to page top */}
          <div className="text-center mb-6 md:mb-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 md:w-12 h-10 md:h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 mx-auto group"
            >
              {/* Rotated arrow icon that scales on hover */}
              <ArrowRight className="h-5 md:h-6 w-5 md:w-6 rotate-[-90deg] group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Copyright Notice */}
          <div className="text-center border-t border-slate-700 pt-6 md:pt-8">
            <p className="text-slate-400 text-sm md:text-lg">© 2023 Qualifi Solutions ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
