"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.1'><path d='M0 0h60v60H0z'/><path d='M30 0v60M0 30h60'/></g></svg>")`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Brand
              </span>{" "}
              with AI
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
            >
              ADmyBRAND AI Suite revolutionizes your marketing strategy with
              intelligent automation, data-driven insights, and personalized
              campaigns that convert.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Results Guaranteed</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-8 text-white/70"
            >
              <div className="text-sm">
                <div className="font-semibold text-white">50,000+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">99.9%</div>
                <div>Uptime</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">4.9/5</div>
                <div>Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative z-10 glass-card rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    AI Dashboard
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">+247%</div>
                    <div className="text-sm text-white/70">Conversion Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">$1.2M</div>
                    <div className="text-sm text-white/70">Revenue Growth</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-1">
                      <span>Campaign Performance</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-1">
                      <span>AI Optimization</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass rounded-full p-4"
            >
              <Brain className="w-8 h-8 text-purple-400" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 glass rounded-full p-4"
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}