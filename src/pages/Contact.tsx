
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { SecureContactForm } from "../components/SecureContactForm";

const Contact = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const bubblePositions = [
    { width: 80, height: 80, left: 10, top: 15, duration: 8 },
    { width: 120, height: 120, left: 75, top: 25, duration: 12 },
    { width: 60, height: 60, left: 45, top: 10, duration: 6 },
    { width: 100, height: 100, left: 20, top: 70, duration: 10 },
    { width: 90, height: 90, left: 85, top: 60, duration: 9 },
  ];

  return (
    <>
      <style>
        {`
          @keyframes bubble-rise {
            0% {
              transform: translateY(100vh);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-200px);
              opacity: 0;
            }
          }
          .bubble-animation {
            animation: bubble-rise linear infinite;
          }
        `}
      </style>
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
          {bubblePositions.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-100 opacity-30 bubble-animation"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                left: `${bubble.left}%`,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Contact Form Section */}
        <div className="flex-1 p-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Write us a message
              </h1>
            </div>

            <SecureContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
