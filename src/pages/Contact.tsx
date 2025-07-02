
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

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

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-32 rounded-lg border-gray-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
