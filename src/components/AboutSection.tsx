
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We continuously evolve our platform with cutting-edge technology to stay ahead of industry trends.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our priority. We're committed to delivering exceptional support and service.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in constant improvement and helping our clients scale their operations efficiently.",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in security, performance, and user experience.",
      color: "from-purple-400 to-pink-500"
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
    <section id="about" className="section-spacing bg-gradient-to-b from-simplex-light/20 via-white to-simplex-light/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-simplex-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-simplex-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg text-simplex-primary font-semibold text-sm mb-6 hover-lift">
            <Target className="w-4 h-4 mr-2" />
            About Simplex HR
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
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
          <div className="bg-gradient-to-br from-white to-simplex-light/50 p-8 rounded-3xl shadow-xl hover-lift animate-fade-in-left border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-simplex-primary to-simplex-accent rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower organizations of all sizes with intelligent HR technology that streamlines 
              operations, enhances employee experience, and drives business growth through data-driven insights.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-simplex-accent/5 p-8 rounded-3xl shadow-xl hover-lift animate-fade-in-right border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-simplex-accent to-simplex-primary rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the world's most trusted HR technology platform, enabling the future of work 
              through innovation, scalability, and unparalleled user experience.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover-lift border-0 shadow-xl group overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white hover-lift border-0 shadow-xl group overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-simplex-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats - Enhanced visibility */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden animate-fade-in-up">
          {/* Enhanced Background Image with better visibility */}
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
              alt="Office workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-simplex-primary/40 via-simplex-accent/20 to-simplex-primary/60"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Our Journey So Far</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">2020</div>
                <div className="text-lg opacity-90">Founded</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-lg opacity-90">Clients</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50M+</div>
                <div className="text-lg opacity-90">Records</div>
              </div>
              <div className="group">
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

export default AboutSection;
