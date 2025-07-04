
/**
 * Team/About Us Page Component
 * 
 * Displays the Qlfy team members with their photos, roles, and backgrounds.
 * Features include:
 * - Animated bubble background
 * - Scroll progress indicator
 * - Responsive grid layout for team member cards
 * - Avatar components with fallback initials
 */

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useBubbleAnimation } from "../hooks/useBubbleAnimation";

const Team = () => {
  // State to track scroll progress for the progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Initialize 15 animated bubbles for background effect
  const bubbles = useBubbleAnimation(15);

  // Effect to calculate and update scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercent = (scrollTop / docHeight) * 100; // Convert to percentage
      setScrollProgress(scrollPercent);
    };

    // Add scroll event listener and cleanup on unmount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Team member data array with photos, roles, and descriptions
  const teamMembers = [
    {
      initials: "RB",
      name: "Richard Barber",
      role: "Chief Commercial Officer",
      description: "Ex Money Saving Expert and Everything Financial",
      image: "/lovable-uploads/a7bb2469-8143-45bc-9adb-41004e340b2b.png"
    },
    {
      initials: "MFJ",
      name: "Marcus Ferguson Jones",
      role: "CEO",
      description: "ex LOQBOX, totallymoney.com and Raylo",
      image: "/lovable-uploads/8add4d7c-7092-45c6-9015-6ea3866467a3.png"
    },
    {
      initials: "GB",
      name: "Gary Buxton",
      role: "Operations Director",
      description: "ex HD Decisions and Experian",
      image: "/lovable-uploads/687064e9-fdb4-4dd3-b8c6-aa5b18d0a61a.png"
    },
    {
      initials: "MW",
      name: "Mark Wakeling",
      role: "CTO",
      description: "ex Capital One and Experian",
      image: "/lovable-uploads/f21af9b9-eb37-497f-aeb1-dfa30e5297df.png"
    },
    {
      initials: "MD",
      name: "Matt Denman",
      role: "Founder, backer, Director",
      description: "Cofounder of HD Decisions and Podium",
      image: "/lovable-uploads/1f54cfdc-8abf-439f-92f6-0449c1e57eef.png"
    },
    {
      initials: "MH",
      name: "Mark Hawkins",
      role: "Board Member",
      description: "Cofounder of HD Decisions & Factor-50",
      image: "/lovable-uploads/ae1193f8-05ce-4c54-8f03-d28731076079.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Fixed Scroll Progress Indicator - Vertical progress bar on right side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-slate-200 rounded-full z-50 shadow-sm">
        <div 
          className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out w-full shadow-lg"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated bubble background - Creates floating effect behind content */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-blue-300"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}px`,
              opacity: bubble.opacity,
              transform: 'translateX(-50%)', // Center horizontally
            }}
          />
        ))}
      </div>

      {/* Navigation component */}
      <Navigation />
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto py-16 px-8 relative z-10">
        {/* Page header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet the talented individuals who make Qlfy's success possible. Our diverse team 
            brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>

        {/* Team members grid - Responsive 1-2-3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Avatar component with image and fallback */}
              <Avatar className="w-32 h-32 mx-auto mb-6">
                {member.image ? (
                  <AvatarImage 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover object-center w-full h-full"
                  />
                ) : null}
                {/* Fallback to initials if image fails to load */}
                <AvatarFallback className="text-white text-2xl font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              
              {/* Team member information */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <h4 className="text-blue-600 font-medium mb-4">{member.role}</h4>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
