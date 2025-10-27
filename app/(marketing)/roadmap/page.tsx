"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Brain,
  Zap,
  Globe,
  Shield,
  Users,
  Code,
  BarChart,
  Smartphone,
  MessageSquare,
  FileText,
} from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "completed",
    items: [
      {
        title: "Multi-Modal AI Support",
        description: "Support for image, document, and audio analysis in conversations",
        icon: Sparkles,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Advanced Analytics Dashboard",
        description: "Comprehensive usage insights and performance metrics",
        icon: BarChart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Team Collaboration Features",
        description: "Real-time co-editing and shared workspaces",
        icon: Users,
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    quarter: "Q2 2024",
    status: "in-progress",
    items: [
      {
        title: "AI Agent Marketplace",
        description: "Discover and deploy pre-built AI agents for specific use cases",
        icon: Brain,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Enhanced Mobile Experience",
        description: "Native mobile apps for iOS and Android with offline support",
        icon: Smartphone,
        color: "from-indigo-500 to-blue-500",
      },
      {
        title: "Voice Conversations",
        description: "Natural voice interactions with AI assistants",
        icon: MessageSquare,
        color: "from-pink-500 to-rose-500",
      },
      {
        title: "Advanced Code Interpreter",
        description: "Execute and debug code in 20+ programming languages",
        icon: Code,
        color: "from-cyan-500 to-blue-500",
      },
    ],
  },
  {
    quarter: "Q3 2024",
    status: "planned",
    items: [
      {
        title: "Enterprise SSO Integration",
        description: "Single sign-on with SAML, OAuth, and Active Directory",
        icon: Shield,
        color: "from-violet-500 to-purple-500",
      },
      {
        title: "Custom Model Training",
        description: "Fine-tune AI models on your own data for specialized tasks",
        icon: Brain,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Workflow Automation",
        description: "Create automated workflows with triggers and actions",
        icon: Zap,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Document Generation",
        description: "Generate professional documents, reports, and presentations",
        icon: FileText,
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    items: [
      {
        title: "Multi-Language Expansion",
        description: "Support for 50+ additional languages with native understanding",
        icon: Globe,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Advanced Security Features",
        description: "End-to-end encryption, audit logs, and compliance certifications",
        icon: Shield,
        color: "from-indigo-500 to-blue-500",
      },
      {
        title: "API Rate Limit Increases",
        description: "Higher rate limits and dedicated infrastructure for enterprise",
        icon: Zap,
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />
    case "in-progress":
      return <Clock className="w-5 h-5 text-blue-500" />
    case "planned":
      return <Circle className="w-5 h-5 text-slate-500" />
    default:
      return <Circle className="w-5 h-5 text-slate-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "from-green-500 to-emerald-500"
    case "in-progress":
      return "from-blue-500 to-cyan-500"
    case "planned":
      return "from-slate-600 to-slate-700"
    default:
      return "from-slate-600 to-slate-700"
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed"
    case "in-progress":
      return "In Progress"
    case "planned":
      return "Planned"
    default:
      return "Planned"
  }
}

export default function RoadmapPage() {
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
            Product
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            See what we're building next. Our roadmap is shaped by your feedback and the future of AI technology.
          </p>
        </motion.div>

        {/* Status Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-sm text-slate-300">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-slate-300">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-5 h-5 text-slate-500" />
            <span className="text-sm text-slate-300">Planned</span>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          {roadmapItems.map((quarter, quarterIndex) => (
            <motion.div
              key={quarter.quarter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + quarterIndex * 0.1 }}
            >
              {/* Quarter Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  {getStatusIcon(quarter.status)}
                  <h2 className="text-2xl font-bold text-white">{quarter.quarter}</h2>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStatusColor(quarter.status)}`}
                >
                  {getStatusLabel(quarter.status)}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {quarter.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + quarterIndex * 0.1 + itemIndex * 0.05 }}
                    className="group bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Have a Feature Request?</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              We'd love to hear your ideas! Your feedback helps shape the future of NovaChat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/feedback"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Submit Feedback
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
