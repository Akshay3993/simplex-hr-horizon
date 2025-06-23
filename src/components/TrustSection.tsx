
import { Shield, Lock, Award, CheckCircle, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "SOC 2 Certified",
      description: "Independently audited security controls"
    },
    {
      icon: Lock,
      title: "ISO 27001",
      description: "International security management standard"
    },
    {
      icon: Award,
      title: "GDPR Compliant",
      description: "Full European data protection compliance"
    },
    {
      icon: CheckCircle,
      title: "HIPAA Ready",
      description: "Healthcare data protection standards"
    }
  ];

  const securityFeatures = [
    "256-bit SSL encryption for all data transmission",
    "Multi-factor authentication (MFA) support",
    "Role-based access controls and permissions",
    "Regular security audits and penetration testing",
    "Automated backup and disaster recovery",
    "99.9% uptime SLA with redundant infrastructure"
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Serving customers in 25+ countries"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified HR and technology professionals"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg text-simplex-accent font-semibold text-sm mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Trust & Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade
            <span className="text-gradient block">Security & Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your data security and business continuity are our top priorities. 
            We maintain the highest standards of security and compliance.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white hover-lift border-0 shadow-lg text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Security Features */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Security Features
            </h3>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Features */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Dedicated Support
            </h3>
            <div className="space-y-6">
              {supportFeatures.map((feature, index) => (
                <Card key={index} className="bg-white border-2 border-simplex-accent/20 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-simplex-accent/10 rounded-xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-simplex-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">&lt; 4hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">256-bit</div>
              <div className="text-sm text-gray-600">SSL Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Daily</div>
              <div className="text-sm text-gray-600">Backups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
