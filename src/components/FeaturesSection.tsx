import { Users, Clock, Calendar, TrendingUp, Search, BarChart, FileText, Map, Phone, PieChart, Zap, Building2, Shield, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Employee & Contractor Management",
      description: "Comprehensive database for all workforce management with detailed profiles, documents, and organizational hierarchy.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Attendance & Biometric Integration",
      description: "Real-time attendance tracking with seamless biometric device integration and automated reporting.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Leave & Holiday Management",
      description: "Streamlined leave application process with automated approvals, balance tracking, and holiday calendar management.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Payroll Automation",
      description: "End-to-end payroll processing with tax calculations, statutory compliance, and direct bank transfers.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Search,
      title: "Production Tracking",
      description: "Complete applicant tracking system from job posting to onboarding with interview scheduling and evaluation.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: BarChart,
      title: "Performance Management",
      description: "360-degree performance reviews, goal setting, continuous feedback, and career development planning.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="section-spacing bg-gradient-to-b from-white via-simplex-light/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-simplex-accent/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-simplex-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg text-simplex-accent font-semibold text-sm mb-6 hover-lift">
            <Zap className="w-4 h-4 mr-2" />
            Comprehensive Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="text-gradient block">Modern HR Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of HR modules designed to streamline every aspect 
            of your workforce management operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm hover-lift transition-all duration-500 border-0 shadow-xl hover:shadow-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative h-32 bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-simplex-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
