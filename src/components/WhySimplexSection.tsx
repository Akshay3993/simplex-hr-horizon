
import { Shield, Zap, Settings, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhySimplexSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, role-based access control, and compliance with international data protection standards.",
      features: ["256-bit SSL encryption", "Multi-factor authentication", "GDPR & SOC 2 compliant", "Regular security audits"]
    },
    {
      icon: Zap,
      title: "Unmatched Scalability",
      description: "Built to grow with your business from startup to enterprise, handling millions of records without compromising performance.",
      features: ["Auto-scaling infrastructure", "99.9% uptime guarantee", "Global data centers", "Load balancing"]
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our robust API and pre-built integrations with popular business applications.",
      features: ["RESTful APIs", "Webhook support", "Pre-built connectors", "Custom integration support"]
    },
    {
      icon: Cloud,
      title: "Cloud-Ready Architecture",
      description: "Modern cloud-native architecture ensuring high availability, automatic updates, and global accessibility from anywhere.",
      features: ["Multi-cloud deployment", "Automatic backups", "Mobile accessibility", "Real-time sync"]
    }
  ];

  return (
    <section id="why-simplex" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-primary/10 text-simplex-primary font-semibold text-sm mb-6">
            Why Choose Simplex
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for the
            <span className="text-gradient block">Future of Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of modern HR technology with enterprise-grade security, 
            unlimited scalability, and seamless integration capabilities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-simplex-light/30 hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-simplex-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-simplex-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of companies worldwide who have transformed their HR operations with Simplex.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-counter">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Companies</div>
            </div>
            <div className="animate-counter" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">Employees</div>
            </div>
            <div className="animate-counter" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div className="animate-counter" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySimplexSection;
