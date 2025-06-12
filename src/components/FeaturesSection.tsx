
import { Users, Clock, Calendar, TrendingUp, Search, BarChart, FileText, Map, Phone, PieChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Employee & Contractor Management",
      description: "Comprehensive database for all workforce management with detailed profiles, documents, and organizational hierarchy."
    },
    {
      icon: Clock,
      title: "Attendance & Biometric Integration",
      description: "Real-time attendance tracking with seamless biometric device integration and automated reporting."
    },
    {
      icon: Calendar,
      title: "Leave & Holiday Management",
      description: "Streamlined leave application process with automated approvals, balance tracking, and holiday calendar management."
    },
    {
      icon: TrendingUp,
      title: "Payroll Automation",
      description: "End-to-end payroll processing with tax calculations, statutory compliance, and direct bank transfers."
    },
    {
      icon: Search,
      title: "Recruitment Tracking",
      description: "Complete applicant tracking system from job posting to onboarding with interview scheduling and evaluation."
    },
    {
      icon: BarChart,
      title: "Performance Management",
      description: "360-degree performance reviews, goal setting, continuous feedback, and career development planning."
    },
    {
      icon: FileText,
      title: "Training Management",
      description: "Learning management system with course creation, progress tracking, and certification management."
    },
    {
      icon: Clock,
      title: "Projects & Timesheets",
      description: "Project-based time tracking, resource allocation, and productivity analysis with detailed reporting."
    },
    {
      icon: Map,
      title: "Field Force Tracking",
      description: "Real-time location tracking for field employees with geofencing and route optimization."
    },
    {
      icon: Phone,
      title: "Helpdesk & Surveys",
      description: "Internal ticketing system and employee satisfaction surveys with analytics and reporting."
    },
    {
      icon: PieChart,
      title: "Reporting & Analytics",
      description: "Comprehensive dashboards and customizable reports with real-time data visualization and insights."
    }
  ];

  return (
    <section id="features" className="py-20 bg-simplex-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-accent/10 text-simplex-accent font-semibold text-sm mb-6">
            Comprehensive Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="text-gradient block">Modern HR Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of HR modules designed to streamline every aspect 
            of your workforce management operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-simplex-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a personalized demo to see how Simplex HR can transform your workforce management.
            </p>
            <button 
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
