"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, MessageSquare, BarChart3, Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 border-b border-slate-800"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">NovaChat</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-slate-300 hover:text-white transition-colors text-sm">
            Features
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="/blog" className="text-slate-300 hover:text-white transition-colors text-sm">
            Blog
          </Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-slate-300 hover:text-white transition-colors text-sm">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 flex flex-col gap-3"
        >
          <Link href="/features" className="text-slate-300 hover:text-white transition-colors py-2">
            Features
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition-colors py-2">
            About
          </Link>
          <Link href="/blog" className="text-slate-300 hover:text-white transition-colors py-2">
            Blog
          </Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors py-2">
            Pricing
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-white transition-colors py-2">
            Contact
          </Link>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6"
        >
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-slate-300">Powered by Advanced AI</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-6 max-w-3xl leading-tight"
        >
          Your AI Assistant for Everything
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 text-center mb-8 max-w-2xl">
          Chat with Nova, your intelligent AI companion. Get instant answers, creative ideas, and productivity boost all
          in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/signup"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            Start Chatting
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#features"
            className="px-8 py-3 border border-slate-700 hover:border-slate-600 text-white rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            {
              icon: MessageSquare,
              title: "Smart Conversations",
              description: "Natural language understanding for meaningful chats",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Get instant responses to your questions",
            },
            {
              icon: BarChart3,
              title: "Track Usage",
              description: "Monitor your chat history and analytics",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-slate-800 px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-slate-400 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-slate-400 hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-slate-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-slate-400 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; 2025 NovaChat. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}
