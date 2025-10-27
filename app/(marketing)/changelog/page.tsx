"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sparkles, Zap, Shield, Code, Users, Bug, Wrench } from "lucide-react"

const changelogEntries = [
  {
    version: "2.5.0",
    date: "March 20, 2024",
    type: "major",
    items: [
      {
        category: "New Features",
        icon: Sparkles,
        color: "from-blue-500 to-cyan-500",
        changes: [
          "Introduced AI Agent Builder for creating custom AI assistants",
          "Added multi-modal support for image and document analysis",
          "New collaboration features with real-time co-editing",
          "Advanced analytics dashboard with usage insights",
        ],
      },
      {
        category: "Improvements",
        icon: Zap,
        color: "from-purple-500 to-pink-500",
        changes: [
          "50% faster response times with optimized infrastructure",
          "Enhanced context window for longer conversations",
          "Improved mobile experience with responsive design updates",
        ],
      },
      {
        category: "Bug Fixes",
        icon: Bug,
        color: "from-green-500 to-emerald-500",
        changes: [
          "Fixed issue with code syntax highlighting in dark mode",
          "Resolved memory leak in long-running conversations",
          "Corrected timezone display in activity logs",
        ],
      },
    ],
  },
  {
    version: "2.4.2",
    date: "March 10, 2024",
    type: "minor",
    items: [
      {
        category: "Security",
        icon: Shield,
        color: "from-orange-500 to-red-500",
        changes: [
          "Enhanced encryption for data at rest",
          "Implemented additional rate limiting protections",
          "Updated security headers and CSP policies",
        ],
      },
      {
        category: "Bug Fixes",
        icon: Wrench,
        color: "from-indigo-500 to-blue-500",
        changes: [
          "Fixed export functionality for large conversations",
          "Resolved issue with template sharing permissions",
        ],
      },
    ],
  },
  {
    version: "2.4.0",
    date: "February 28, 2024",
    type: "major",
    items: [
      {
        category: "New Features",
        icon: Code,
        color: "from-pink-500 to-rose-500",
        changes: [
          "Code interpreter with support for Python, JavaScript, and more",
          "Template marketplace for sharing and discovering prompts",
          "API access for enterprise customers",
        ],
      },
      {
        category: "Improvements",
        icon: Users,
        color: "from-cyan-500 to-blue-500",
        changes: [
          "Enhanced team management with role-based permissions",
          "Improved search functionality across conversations",
          "Better handling of large file uploads",
        ],
      },
    ],
  },
  {
    version: "2.3.1",
    date: "February 15, 2024",
    type: "patch",
    items: [
      {
        category: "Bug Fixes",
        icon: Bug,
        color: "from-violet-500 to-purple-500",
        changes: [
          "Fixed notification delivery issues",
          "Resolved UI glitches in settings panel",
          "Corrected billing calculation for team plans",
        ],
      },
    ],
  },
]

const getVersionBadgeColor = (type: string) => {
  switch (type) {
    case "major":
      return "bg-gradient-to-r from-blue-500 to-cyan-500"
    case "minor":
      return "bg-gradient-to-r from-purple-500 to-pink-500"
    case "patch":
      return "bg-gradient-to-r from-green-500 to-emerald-500"
    default:
      return "bg-slate-700"
  }
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Product
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Changelog
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Stay up to date with new features, improvements, and bug fixes in NovaChat.
          </p>
        </motion.div>

        {/* Changelog Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {changelogEntries.map((entry, entryIndex) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: entryIndex * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-950" />

                {/* Version Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">Version {entry.version}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getVersionBadgeColor(entry.type)}`}
                    >
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)} Release
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{entry.date}</p>
                </div>

                {/* Changes */}
                <div className="space-y-6">
                  {entry.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} p-2`}>
                          <item.icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {item.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex items-start gap-3 text-slate-300">
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span className="leading-relaxed">{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about new features and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
