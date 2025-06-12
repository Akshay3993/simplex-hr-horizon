
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-light opacity-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-simplex-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-simplex-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-accent/10 text-simplex-accent font-semibold text-sm mb-8">
            <span className="w-2 h-2 bg-simplex-accent rounded-full mr-2 animate-pulse"></span>
            Cloud-Ready HRMS Solution
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Simplify Workforce
            <span className="text-gradient block">Management</span>
            <span className="text-simplex-primary">with Simplex HR</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your HR operations with our comprehensive, cloud-ready HRMS platform. 
            From recruitment to performance management, streamline every aspect of human resources.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 hover-lift"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-simplex-primary text-simplex-primary hover:bg-simplex-primary hover:text-white px-8 py-4 text-lg transition-all duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <Users className="h-8 w-8 text-simplex-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <TrendingUp className="h-8 w-8 text-simplex-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <TrendingUp className="h-8 w-8 text-simplex-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-gray-600">Records Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-simplex-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-simplex-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
