"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Trash2, Download, Calendar } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [chats] = useState([
    { id: 1, title: "React Best Practices", date: "Today", messages: 15 },
    { id: 2, title: "TypeScript Tips", date: "Yesterday", messages: 8 },
    { id: 3, title: "Next.js Routing", date: "2 days ago", messages: 12 },
    { id: 4, title: "CSS Grid Layout", date: "3 days ago", messages: 6 },
    { id: 5, title: "API Integration", date: "1 week ago", messages: 20 },
  ])

  const [filter, setFilter] = useState("all")

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Chat History</h1>
        <p className="text-slate-400 text-sm mt-2">Browse all your past conversations</p>
      </div>

      {/* Filters */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 p-4">
        <div className="flex gap-2 overflow-x-auto">
          {["all", "today", "week", "month"].map((f) => (
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

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-3">
          {chats.map((chat, index) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">{chat.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{chat.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{chat.messages} messages</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition"
                    title="Download"
                  >
                    <Download size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-red-500/10 rounded-md text-slate-400 hover:text-red-400 transition"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
