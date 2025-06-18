
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional().refine(
    (val) => !val || /^\+?[\d\s\-\(\)]+$/.test(val),
    "Please enter a valid phone number"
  ),
  employees: z.string().optional(),
  message: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      employees: "",
      message: "",
    },
  });

  const handleSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting demo request to Supabase Edge Function...");
      
      const { data: responseData, error } = await supabase.functions.invoke('send-demo-email', {
        body: data
      });

      if (error) {
        throw error;
      }

      console.log("Demo request response:", responseData);
      
      toast({
        title: "Demo Request Submitted Successfully!",
        description: "We've sent a confirmation email to your address. Our team will contact you within 24 hours to schedule your personalized demo.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const demoIncludes = [
    "Personalized system walkthrough",
    "Custom feature demonstration",
    "Integration possibilities review",
    "Pricing and implementation discussion",
    "Q&A with our HR experts",
    "Free trial access"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-simplex-light/30 via-white to-simplex-light/50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Simplex HR
            </Link>
            <Link 
              to="/"
              className="flex items-center text-gray-700 hover:text-simplex-primary transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Demo Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Demo Info */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-accent/10 text-simplex-accent font-semibold text-sm mb-6">
                Request a Demo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See Simplex HR
                <span className="text-gradient block">in Action</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Schedule a personalized demo and discover how Simplex HR can streamline your 
                workforce management operations and boost productivity.
              </p>

              {/* What's Included */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your demo includes:</h3>
                <ul className="space-y-3">
                  {demoIncludes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-simplex-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No commitment required
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  30-minute session
                </div>
              </div>
            </div>

            {/* Right Column - Demo Form */}
            <div>
              <Card className="bg-white shadow-xl border-0 hover-lift">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="border-gray-300 focus:border-simplex-primary focus:ring-simplex-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@company.com"
                                  className="border-gray-300 focus:border-simplex-primary focus:ring-simplex-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Company"
                                  className="border-gray-300 focus:border-simplex-primary focus:ring-simplex-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+1 (555) 123-4567"
                                  className="border-gray-300 focus:border-simplex-primary focus:ring-simplex-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="employees"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Employees</FormLabel>
                            <FormControl>
                              <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-simplex-primary focus:border-simplex-primary"
                                {...field}
                              >
                                <option value="">Select range</option>
                                <option value="1-50">1-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="500+">500+ employees</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us about your HR needs</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder="What specific HR challenges are you looking to solve?"
                                className="border-gray-300 focus:border-simplex-primary focus:ring-simplex-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full gradient-primary text-white py-3 text-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Schedule My Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
