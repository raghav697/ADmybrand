"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite's AI technology work?",
    answer: "Our AI Suite uses advanced machine learning algorithms and natural language processing to analyze your marketing data, customer behavior, and market trends. It processes millions of data points to provide actionable insights, automate campaign optimization, and generate high-converting content tailored to your audience.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite offers native integrations with over 100+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, Mailchimp, Slack, and more. Our API also allows for custom integrations to fit your unique tech stack.",
  },
  {
    question: "What kind of ROI can I expect from using ADmyBRAND?",
    answer: "Our customers typically see significant improvements within the first 30 days. On average, businesses experience a 247% increase in ROI, 60% reduction in customer acquisition costs, and 300% improvement in team productivity. Results may vary based on your industry and implementation.",
  },
  {
    question: "Is my data secure with ADmyBRAND AI Suite?",
    answer: "Security is our top priority. We use bank-grade encryption, are SOC 2 Type II compliant, and fully GDPR compliant. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee. We never share or sell your data to third parties.",
  },
  {
    question: "Do you offer customer support and training?",
    answer: "Yes! All plans include comprehensive support. Starter plans get email support, Professional plans get priority support, and Enterprise customers receive 24/7 dedicated support with a dedicated account manager. We also provide free onboarding, training sessions, and access to our knowledge base and video tutorials.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to your account until the end of your current billing period. We also offer a 30-day money-back guarantee if you're not completely satisfied.",
  },
  {
    question: "What makes ADmyBRAND different from other marketing platforms?",
    answer: "ADmyBRAND AI Suite combines the power of advanced AI with intuitive design and comprehensive features. Unlike other platforms that focus on single aspects of marketing, we provide a complete solution with AI-powered analytics, content generation, automation, and real-time optimization all in one platform.",
  },
  {
    question: "How quickly can I get started with ADmyBRAND?",
    answer: "You can get started immediately! Our setup process takes less than 15 minutes. Simply sign up, connect your existing tools through our one-click integrations, and our AI will begin analyzing your data. Most customers see their first insights within 24 hours of setup.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">FAQ</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Got{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                             Find answers to the most commonly asked questions about 
               ADmyBRAND AI Suite. Can&apos;t find what you&apos;re looking for?
            </p>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you succeed.
                </p>
                <Button className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">
                  Ready to get started?
                </h3>
                <p className="text-blue-100 mb-4">
                  Try ADmyBRAND AI Suite free for 30 days.
                </p>
                <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-50">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <Accordion type="single">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} title={faq.question}>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}