"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite transformed our marketing ROI by 347% in just 3 months. The AI-powered insights are incredibly accurate and the automation saves us 20+ hours per week.",
    rating: 5,
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "CEO & Founder",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "The precision targeting feature helped us reduce customer acquisition costs by 60% while doubling our conversion rates. Best investment we've made for our marketing stack.",
    rating: 5,
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Digital Marketing",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "The real-time dashboard and AI content generation features are game-changers. We've increased our campaign performance by 200% and our team productivity has never been higher.",
    rating: 5,
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop",
  },
  {
    name: "David Park",
    title: "VP of Marketing",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "ADmyBRAND's enterprise security and scalability allowed us to expand globally with confidence. The dedicated support team is phenomenal - they truly care about our success.",
    rating: 5,
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop",
  },
  {
    name: "Lisa Thompson",
    title: "Marketing Manager",
    company: "FutureRetail",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    content: "The automated workflows and team collaboration features have revolutionized how we operate. We're more efficient, more data-driven, and delivering better results than ever.",
    rating: 5,
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop",
  },
];

const companyLogos = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  { name: "InnovateInc", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  { name: "GrowthCo", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  { name: "ScaleHub", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  { name: "FutureCore", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  { name: "NextGen", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
];

export function TestimonialsSection() {
  const testimonialCards = testimonials.map((testimonial, index) => (
    <div key={index} className="px-4">
      <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
        <CardContent className="p-8 text-center space-y-6">
          {/* Quote Icon */}
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg text-white/90 leading-relaxed italic">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-white/70">{testimonial.title}</div>
              <div className="text-sm text-blue-400">{testimonial.company}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ));

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Customer Stories</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              50,000+
            </span>{" "}
            Businesses
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            See how companies like yours are transforming their marketing 
            with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Carousel
            autoPlay={true}
            autoPlayInterval={6000}
            showArrows={true}
            showDots={true}
            className="h-96"
          >
            {testimonialCards}
          </Carousel>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white/70 mb-8">
            Trusted by industry leaders
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-32 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white/70 font-semibold text-sm">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "50,000+", label: "Happy Customers" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "247%", label: "Average ROI Increase" },
            { number: "4.9/5", label: "Customer Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}