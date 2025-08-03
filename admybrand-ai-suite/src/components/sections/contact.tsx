"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;ve received your message and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-4 py-2 mb-6"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Get in Touch</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                 Let&apos;s{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to revolutionize your marketing with AI? 
                Get in touch with our team for a personalized demo and consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">hello@admybrand.ai</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Office</div>
                  <div className="text-gray-400">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">
                What to expect:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Personalized demo session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Custom pricing proposal</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        {...register("name")}
                        placeholder="Your Name *"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address *"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        {...register("company")}
                        placeholder="Company Name *"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      {errors.company && (
                        <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        {...register("phone")}
                        placeholder="Phone Number"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      {...register("subject")}
                      placeholder="Subject *"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us about your project and how we can help... *"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}