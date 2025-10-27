"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Share2, Copy, ExternalLink, Trash2 } from "lucide-react"
import Link from "next/link"

export default function SharedPage() {
  const [sharedChats] = useState([
    { id: 1, title: "React Component Patterns", sharedBy: "You", link: "nova.chat/s/abc123", views: 45 },
    { id: 2, title: "TypeScript Advanced Types", sharedBy: "John Doe", link: "nova.chat/s/def456", views: 23 },
  ])

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(`https://${link}`)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Shared Chats</h1>
        <p className="text-slate-400 text-sm mt-2">Manage your shared conversations</p>
      </div>

      {/* Shared Chats List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {sharedChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Share2 size={48} className="text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">No shared chats yet</p>
            <p className="text-slate-500 text-sm mt-2">Share your conversations with others</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-3">
            {sharedChats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{chat.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span>Shared by {chat.sharedBy}</span>
                      <span>{chat.views} views</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900 border border-slate-700 rounded text-xs text-slate-400">
                      <span className="flex-1 truncate">{chat.link}</span>
                      <button
                        onClick={() => copyLink(chat.link)}
                        className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition"
                      title="Open"
                    >
                      <ExternalLink size={16} />
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
        )}
      </div>
    </div>
  )
}
