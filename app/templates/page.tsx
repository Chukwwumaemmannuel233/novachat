"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, FileText, Copy, Star } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const [templates] = useState([
    {
      id: 1,
      title: "Code Review",
      description: "Get detailed code review and suggestions",
      prompt: "Please review this code and provide suggestions for improvement...",
      category: "Development",
      popular: true,
    },
    {
      id: 2,
      title: "Email Writer",
      description: "Write professional emails",
      prompt: "Help me write a professional email about...",
      category: "Writing",
      popular: true,
    },
    {
      id: 3,
      title: "Bug Debugger",
      description: "Debug code issues",
      prompt: "I'm encountering this error in my code...",
      category: "Development",
      popular: false,
    },
    {
      id: 4,
      title: "Content Summarizer",
      description: "Summarize long articles or documents",
      prompt: "Please summarize the following content...",
      category: "Productivity",
      popular: false,
    },
  ])

  const [filter, setFilter] = useState("all")

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Prompt Templates</h1>
        <p className="text-slate-400 text-sm mt-2">Pre-built prompts for common tasks</p>
      </div>

      {/* Filters */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 p-4">
        <div className="flex gap-2 overflow-x-auto">
          {["all", "development", "writing", "productivity"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                filter === f
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-blue-400" />
                  <h3 className="text-white font-semibold">{template.title}</h3>
                </div>
                {template.popular && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
              </div>
              <p className="text-sm text-slate-400 mb-3">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 px-2 py-1 bg-slate-900 rounded">{template.category}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyPrompt(template.prompt)}
                  className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                  title="Copy prompt"
                >
                  <Copy size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
