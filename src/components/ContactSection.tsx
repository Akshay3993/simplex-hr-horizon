
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting contact message to Supabase Edge Function...");
      
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        throw error;
      }

      console.log("Contact message response:", responseData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@simplexhr.com",
      action: "mailto:hello@simplexhr.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Business Ave, Suite 100\nSan Francisco, CA 94105",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here to help",
      contact: "Mon-Fri: 9AM-6PM PST\nSat-Sun: 10AM-4PM PST",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-simplex-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-simplex-accent/10 text-simplex-accent font-semibold text-sm mb-6">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a
            <span className="text-gradient block">Conversation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Simplex HR? Our team is here to help you find the perfect 
            solution for your workforce management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white hover-lift border-0 shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{info.description}</p>
                        <div className="text-sm text-gray-800 whitespace-pre-line">
                          {info.contact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-simplex-primary rounded-lg flex items-center justify-center text-white hover:bg-simplex-accent transition-colors">
                  <span className="text-sm font-bold">Li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-simplex-primary rounded-lg flex items-center justify-center text-white hover:bg-simplex-accent transition-colors">
                  <span className="text-sm font-bold">Tw</span>
                </a>
                <a href="#" className="w-10 h-10 bg-simplex-primary rounded-lg flex items-center justify-center text-white hover:bg-simplex-accent transition-colors">
                  <span className="text-sm font-bold">Fb</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-0 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <FormLabel>Email Address *</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="Tell us more about your inquiry..."
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
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
