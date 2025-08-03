"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 29,
    icon: Zap,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5,000 contacts",
      "3 active campaigns",
      "Basic AI analytics",
      "Email support",
      "Standard templates",
      "Basic automation",
    ],
    notIncluded: [
      "Advanced AI features",
      "Custom integrations",
      "Priority support",
      "Advanced analytics",
    ],
    popular: false,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Professional",
    price: 99,
    icon: Star,
    description: "Ideal for growing businesses and teams",
    features: [
      "Up to 50,000 contacts",
      "Unlimited campaigns",
      "Advanced AI analytics",
      "Priority support",
      "Custom templates",
      "Advanced automation",
      "A/B testing",
      "Custom integrations",
      "Team collaboration",
    ],
    notIncluded: [
      "White-label solutions",
      "Dedicated account manager",
    ],
    popular: true,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Enterprise",
    price: 299,
    icon: Crown,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited contacts",
      "Unlimited campaigns",
      "Full AI suite access",
      "24/7 dedicated support",
      "White-label solutions",
      "Custom development",
      "Advanced security",
      "SSO integration",
      "Dedicated account manager",
      "Custom reporting",
      "API access",
    ],
    notIncluded: [],
    popular: false,
    gradient: "from-gradient-to-r from-yellow-500 to-orange-500",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium">Simple Pricing</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Scale your business with our flexible pricing options. 
            Start free and upgrade as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`relative h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
              }`}>
                <CardHeader className="text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${plan.gradient} p-4 mb-4`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      {formatCurrency(plan.price)}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="px-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-gray-500" />
                      </div>
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="p-8 pt-4">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    size="lg"
                    variant={plan.popular ? "default" : "secondary"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-sm">Free Migration</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}