
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Target, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze creditworthiness and provide instant prequalification decisions with unprecedented accuracy.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Real-time risk scoring", "Predictive analytics", "Alternative data integration"]
    },
    {
      icon: Zap,
      title: "Instant Prequalification",
      description: "Lightning-fast prequalification process that delivers results in seconds, not days, improving customer experience dramatically.",
      gradient: "from-purple-500 to-pink-500",
      features: ["Sub-second processing", "Real-time decisions", "24/7 availability"]
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Smart matching technology connects consumers with the most suitable lending products based on their unique financial profile.",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Product optimization", "Custom recommendations", "Success rate improvement"]
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security and full regulatory compliance ensure your data is protected while meeting all industry standards.",
      gradient: "from-orange-500 to-red-500",
      features: ["End-to-end encryption", "GDPR compliant", "PCI DSS certified"]
    },
    {
      icon: Users,
      title: "White-Label Solutions",
      description: "Customizable solutions that can be seamlessly integrated into your existing platform with your branding and workflows.",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Custom branding", "API integration", "Full customization"]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analytics dashboard providing deep insights into performance metrics and user behavior.",
      gradient: "from-pink-500 to-rose-500",
      features: ["Real-time dashboards", "Performance metrics", "Business intelligence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-slate-200 rounded-full z-50 shadow-sm">
        <div 
          className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out w-full shadow-lg"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="flex-1 p-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-8">
            <Target className="w-4 h-4 mr-2" />
            Targeted Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered lending solutions designed to transform your prequalification process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Lending Process?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get started with our cutting-edge solutions and see the difference AI-powered prequalification can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about-us">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
