"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  Sparkles 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your data to provide actionable insights and predict market trends with 95% accuracy.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal customers with laser-focused campaigns using our intelligent audience segmentation and behavioral analysis.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Monitor your campaigns' performance with live metrics, custom KPIs, and automated reporting that saves hours of manual work.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Automation",
    description: "Automate repetitive tasks and workflows with our no-code automation builder that increases efficiency by 300%.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance to protect your sensitive data.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with role-based permissions, shared workspaces, and real-time commenting features.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "Scalable Infrastructure",
    description: "Built to grow with your business. Handle millions of data points and scale globally with our cloud-native architecture.",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Generate high-converting ad copy, social media posts, and email campaigns with our GPT-4 powered content engine.",
    color: "from-violet-500 to-purple-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dominate
            </span>{" "}
            Your Market
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create,
            optimize, and scale your marketing campaigns with unprecedented precision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:bg-white/90">
                <CardContent className="p-6 text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of businesses already using ADmyBRAND AI Suite to
              revolutionize their marketing strategy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}