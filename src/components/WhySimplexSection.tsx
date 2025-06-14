
import { Shield, Zap, Settings, Cloud, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhySimplexSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, role-based access control, and compliance with international data protection standards.",
      features: ["256-bit SSL encryption", "Multi-factor authentication", "GDPR & SOC 2 compliant", "Regular security audits"],
      color: "from-blue-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      icon: Zap,
      title: "Unmatched Scalability",
      description: "Built to grow with your business from startup to enterprise, handling millions of records without compromising performance.",
      features: ["Auto-scaling infrastructure", "99.9% uptime guarantee", "Global data centers", "Load balancing"],
      color: "from-green-500 to-green-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our robust API and pre-built integrations with popular business applications.",
      features: ["RESTful APIs", "Webhook support", "Pre-built connectors", "Custom integration support"],
      color: "from-purple-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      icon: Cloud,
      title: "Cloud-Ready Architecture",
      description: "Modern cloud-native architecture ensuring high availability, automatic updates, and global accessibility from anywhere.",
      features: ["Multi-cloud deployment", "Automatic backups", "Mobile accessibility", "Real-time sync"],
      color: "from-cyan-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="why-simplex" className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg text-simplex-primary font-semibold text-sm mb-6 hover-lift">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Simplex
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Built for the
            <span className="text-gradient block">Future of Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of modern HR technology with enterprise-grade security, 
            unlimited scalability, and seamless integration capabilities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-white hover-lift transition-all duration-500 border-0 shadow-xl hover:shadow-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={benefit.bgImage} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-simplex-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Enhanced Background Image Visibility - Increased to 70% opacity */}
          <div className="absolute inset-0 opacity-70">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop"
              alt="Global network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-simplex-primary/40 via-transparent to-simplex-accent/40"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Trusted by Industry Leaders
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies worldwide who have transformed their HR operations with Simplex.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-counter group">
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-lg opacity-90">Companies</div>
              </div>
              <div className="animate-counter group" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50M+</div>
                <div className="text-lg opacity-90">Employees</div>
              </div>
              <div className="animate-counter group" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-lg opacity-90">Uptime</div>
              </div>
              <div className="animate-counter group" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySimplexSection;
