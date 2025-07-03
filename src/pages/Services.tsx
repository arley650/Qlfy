
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, Users, Shield, TrendingUp } from "lucide-react";

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
      title: "AI-Powered Prequalification",
      description: "Advanced machine learning algorithms provide instant, accurate prequalification decisions without impacting credit scores, giving consumers certainty before they apply.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Soft credit checks only", "Instant binary decisions", "No impact on credit score"]
    },
    {
      icon: Zap,
      title: "Real-Time Product Matching",
      description: "Instantly match consumers with lending products they're eligible for, complete with APR rates and credit limits they'll actually receive.",
      gradient: "from-purple-500 to-pink-500",
      features: ["Guaranteed APR visibility", "Confirmed credit limits", "Binary yes/no decisions"]
    },
    {
      icon: Target,
      title: "Comprehensive Product Discovery",
      description: "Show consumers all available lending products with transparent eligibility, helping them make informed decisions about their financial options.",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Complete product visibility", "Transparent eligibility", "Informed decision making"]
    },
    {
      icon: Shield,
      title: "Lender IP Protection",
      description: "Our system protects lender intellectual property while enabling participation in prequalification searches without exposing sensitive lending criteria.",
      gradient: "from-orange-500 to-red-500",
      features: ["IP protection guaranteed", "Controlled consumer filtering", "Confidential lending criteria"]
    },
    {
      icon: Users,
      title: "Distributor-Friendly Platform",
      description: "Free eligibility services for distributors with high-performing application journeys and transparent explanations of product availability.",
      gradient: "from-indigo-500 to-purple-500",
      features: ["No charges for distributors", "Transparent explanations", "Optimized conversion rates"]
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Bureau Usage",
      description: "Efficient credit bureau utilization ensures lenders aren't constrained by excessive costs while maintaining comprehensive market presence.",
      gradient: "from-pink-500 to-rose-500",
      features: ["Reduced bureau costs", "Market presence maintained", "Efficient credit checks"]
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
            Prequalification Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing lending prequalification for consumers, distributors, and lenders with transparent, instant, and secure solutions.
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
      </div>
    </div>
  );
};

export default Services;
