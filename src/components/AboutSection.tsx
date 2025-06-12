
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We continuously evolve our platform with cutting-edge technology to stay ahead of industry trends."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our priority. We're committed to delivering exceptional support and service."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in constant improvement and helping our clients scale their operations efficiently."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in security, performance, and user experience."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in HR technology with a passion for transforming workplace experiences."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former tech lead at major SaaS companies, expert in scalable cloud architecture."
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Product visionary with deep understanding of HR workflows and user needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-primary/10 text-simplex-primary font-semibold text-sm mb-6">
            About Simplex HR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming HR
            <span className="text-gradient block">Since 2020</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a mission to simplify workforce management, we've grown from a small startup 
            to a trusted partner for companies worldwide, serving over 500 organizations globally.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-simplex-light to-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower organizations of all sizes with intelligent HR technology that streamlines 
              operations, enhances employee experience, and drives business growth through data-driven insights.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-simplex-accent/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the world's most trusted HR technology platform, enabling the future of work 
              through innovation, scalability, and unparalleled user experience.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover-lift border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white hover-lift border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-simplex-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Our Journey So Far</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2020</div>
              <div className="text-lg opacity-90">Founded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">Records</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
