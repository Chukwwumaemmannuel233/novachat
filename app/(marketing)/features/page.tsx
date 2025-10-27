"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, Shield, Globe, Sparkles, Code, Users, BarChart, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Get instant AI-powered responses with our optimized infrastructure and advanced caching.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Communicate in over 95 languages with native-level understanding and context.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Advanced AI Models",
    description: "Access to GPT-4, Claude, and other cutting-edge models in one platform.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Generate, debug, and optimize code in multiple programming languages.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share conversations, templates, and insights with your entire team.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BarChart,
    title: "Usage Analytics",
    description: "Track usage patterns, costs, and performance with detailed analytics.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your data is encrypted end-to-end and never used for training.",
    color: "from-violet-500 to-purple-500",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern AI Workflows
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale AI-powered applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Join thousands of developers and teams building the future with NovaChat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
