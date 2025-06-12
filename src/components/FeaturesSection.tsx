
import { Users, Clock, Calendar, TrendingUp, Search, BarChart, FileText, Map, Phone, PieChart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Employee & Contractor Management",
      description: "Comprehensive database for all workforce management with detailed profiles, documents, and organizational hierarchy.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: Clock,
      title: "Attendance & Biometric Integration",
      description: "Real-time attendance tracking with seamless biometric device integration and automated reporting.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: Calendar,
      title: "Leave & Holiday Management",
      description: "Streamlined leave application process with automated approvals, balance tracking, and holiday calendar management.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Payroll Automation",
      description: "End-to-end payroll processing with tax calculations, statutory compliance, and direct bank transfers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      icon: Search,
      title: "Recruitment Tracking",
      description: "Complete applicant tracking system from job posting to onboarding with interview scheduling and evaluation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      icon: BarChart,
      title: "Performance Management",
      description: "360-degree performance reviews, goal setting, continuous feedback, and career development planning.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-6 w-6 text-simplex-primary" />
                  </div>
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

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {[
            { icon: FileText, title: "Training Management", color: "bg-blue-500" },
            { icon: Clock, title: "Project Timesheets", color: "bg-green-500" },
            { icon: Map, title: "Field Force Tracking", color: "bg-purple-500" },
            { icon: Phone, title: "Helpdesk & Surveys", color: "bg-orange-500" },
            { icon: PieChart, title: "Analytics & Reports", color: "bg-red-500" }
          ].map((item, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 hover-lift shadow-lg`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-white to-simplex-light rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto border border-white/50 hover-lift">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop"
                alt="HR Dashboard"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Schedule a personalized demo to see how Simplex HR can transform your workforce management.
            </p>
            <button 
              className="bg-gradient-primary text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover-lift text-lg"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Demo Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
