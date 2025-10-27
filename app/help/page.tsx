"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search, HelpCircle, Book, Keyboard, Mail } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I start a new chat?",
      answer: "Click the 'New Chat' button in the sidebar or press Cmd/Ctrl + N to start a fresh conversation.",
    },
    {
      question: "Can I save important messages?",
      answer: "Yes! Hover over any message and click the bookmark icon to save it to your Saved Notes.",
    },
    {
      question: "How do I search my chat history?",
      answer: "Use the Search Chat feature in the sidebar to find specific conversations or topics.",
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Pro users get unlimited chats, advanced AI models, priority support, and API access.",
    },
  ]

  const shortcuts = [
    { keys: ["Cmd", "N"], action: "New Chat" },
    { keys: ["Cmd", "K"], action: "Search" },
    { keys: ["Cmd", "S"], action: "Save Message" },
    { keys: ["Cmd", "/"], action: "Toggle Sidebar" },
  ]

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Help & Documentation</h1>
        <p className="text-slate-400 text-sm mt-2">Get help and learn how to use NovaChat</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition cursor-pointer"
            >
              <Book size={24} className="text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
              <p className="text-sm text-slate-400">Learn the basics of using NovaChat</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition cursor-pointer"
            >
              <Mail size={24} className="text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
              <p className="text-sm text-slate-400">Get help from our support team</p>
            </motion.div>
          </div>

          {/* FAQs */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={20} className="text-blue-400" />
              <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg group"
                >
                  <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Keyboard size={20} className="text-blue-400" />
              <h2 className="text-xl font-bold text-white">Keyboard Shortcuts</h2>
            </div>
            <div className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700 rounded-lg"
                >
                  <span className="text-sm text-slate-300">{shortcut.action}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key) => (
                      <kbd
                        key={key}
                        className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-300"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
