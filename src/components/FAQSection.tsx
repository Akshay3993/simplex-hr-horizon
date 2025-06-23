
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation usually takes 2-4 weeks depending on your organization size and complexity. Our dedicated implementation team will work with you to ensure a smooth transition with minimal disruption to your operations."
    },
    {
      question: "Is my data secure with Simplex HR?",
      answer: "Absolutely. We use enterprise-grade security with 256-bit SSL encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, geo-redundant data centers with 99.9% uptime guarantee."
    },
    {
      question: "Can Simplex HR integrate with our existing systems?",
      answer: "Yes! We offer seamless integrations with popular accounting software, payroll systems, and business applications. Our API also allows custom integrations to meet your specific needs."
    },
    {
      question: "Do you provide training for our team?",
      answer: "We provide comprehensive training including live sessions, video tutorials, and documentation. Our customer success team also offers ongoing support to ensure your team maximizes the platform's potential."
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 customer support via email, phone, and live chat. Premium plans include dedicated account managers and priority support with guaranteed response times."
    },
    {
      question: "Can I customize the system for our specific needs?",
      answer: "Yes, Simplex HR is highly customizable. You can configure workflows, create custom fields, set up approval processes, and personalize dashboards to match your organization's unique requirements."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer native mobile apps for iOS and Android, allowing employees to access HR functions, submit requests, view payslips, and check attendance from anywhere."
    },
    {
      question: "What happens to our data if we decide to switch providers?",
      answer: "We provide complete data export capabilities in standard formats. There are no lock-in contracts, and we'll assist with data migration to ensure a smooth transition if needed."
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-simplex-light shadow-lg text-simplex-accent font-semibold text-sm mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions?
            <span className="text-gradient block">We Have Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about Simplex HR Solutions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-simplex-accent/30 transition-colors animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-simplex-accent flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-simplex-accent hover:text-simplex-primary font-semibold transition-colors"
          >
            Contact our support team
            <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
