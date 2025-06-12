
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-simplex-light via-white to-simplex-accent/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-simplex-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-simplex-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-radial opacity-30"></div>
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-simplex-accent font-semibold text-sm mb-8 shadow-lg hover-lift">
              <span className="w-3 h-3 bg-simplex-accent rounded-full mr-3 animate-pulse-slow"></span>
              Cloud-Ready HRMS Solution
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Simplify Workforce
              <span className="text-gradient block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Management</span>
              <span className="text-simplex-primary animate-fade-in-up" style={{ animationDelay: '0.6s' }}>with Simplex HR</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              Transform your HR operations with our comprehensive, cloud-ready HRMS platform. 
              From recruitment to performance management, streamline every aspect of human resources.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 hover-lift shadow-xl"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-simplex-primary text-simplex-primary hover:bg-simplex-primary hover:text-white px-8 py-4 text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="Modern HR Dashboard"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-simplex-accent rounded-full opacity-20 animate-bounce-slow"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center justify-center text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-white/20">
              <Users className="h-10 w-10 text-simplex-accent mx-auto mb-4 animate-bounce-slow" />
              <div className="text-3xl font-bold text-gray-900 animate-counter">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-white/20">
              <TrendingUp className="h-10 w-10 text-simplex-accent mx-auto mb-4 animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
              <div className="text-3xl font-bold text-gray-900 animate-counter" style={{ animationDelay: '0.5s' }}>98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-white/20">
              <Shield className="h-10 w-10 text-simplex-accent mx-auto mb-4 animate-bounce-slow" style={{ animationDelay: '1s' }} />
              <div className="text-3xl font-bold text-gray-900 animate-counter" style={{ animationDelay: '1s' }}>50M+</div>
              <div className="text-gray-600 font-medium">Records Processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-simplex-primary rounded-full flex justify-center glass-effect">
            <div className="w-1 h-3 bg-simplex-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
