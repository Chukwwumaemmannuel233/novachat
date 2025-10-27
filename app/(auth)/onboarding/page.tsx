"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, MessageSquare, Zap, BarChart3, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const onboardingSteps = [
  {
    title: "Welcome to NovaChat",
    description: "Your AI assistant for everything. Let's get you started!",
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Smart Conversations",
    description: "Chat naturally with Nova. Ask questions, get creative ideas, and solve problems instantly.",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Track Your Usage",
    description: "Monitor your chat history, usage patterns, and get insights from your AI Dashboard.",
    icon: BarChart3,
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Customize Your Experience",
    description: "Personalize your settings, preferences, and notification to match your workflow.",
    icon: Settings,
    color: "from-green-500 to-green-600",
  },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    setCurrentStep(onboardingSteps.length - 1)
  }

  const step = onboardingSteps[currentStep]
  const Icon = step.icon

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex gap-2 mb-4">
            {onboardingSteps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className={`h-1 flex-1 rounded-full origin-left ${
                  index <= currentStep ? "bg-blue-500" : "bg-slate-700"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Step {currentStep + 1} of {onboardingSteps.length}
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className={`w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
            >
              <Icon className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              {step.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-400 max-w-lg mx-auto"
            >
              {step.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Features Grid (Last Step) */}
        {currentStep === onboardingSteps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            {[
              { title: "Save Notes", description: "Bookmark important snippets" },
              { title: "Search History", description: "Find past conversations" },
              { title: "AI Dashboard", description: "View your analytics" },
              { title: "Integrations", description: "Connect your tools" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition-colors"
              >
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-slate-700 hover:border-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                Back
              </button>
            )}
          </div>

          <div className="flex gap-4">
            {currentStep < onboardingSteps.length - 1 && (
              <button onClick={handleSkip} className="px-6 py-2 text-slate-400 hover:text-white transition-colors">
                Skip
              </button>
            )}

            {currentStep < onboardingSteps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
