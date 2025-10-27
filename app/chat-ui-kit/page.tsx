"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ChatUIKitPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const components = [
    {
      id: "message-bubble",
      name: "Message Bubble",
      description: "Animated message component with user and AI variants",
      code: `<div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
  Your message here
</div>`,
    },
    {
      id: "input-box",
      name: "Input Box",
      description: "Chat input with file upload and send button",
      code: `<div className="flex gap-2 items-center bg-slate-800 rounded-lg p-2">
  <input placeholder="Type a message..." />
  <button>Send</button>
</div>`,
    },
    {
      id: "chat-header",
      name: "Chat Header",
      description: "Header with title and action buttons",
      code: `<div className="flex items-center justify-between p-4 border-b">
  <h1>Chat Title</h1>
  <button>Menu</button>
</div>`,
    },
    {
      id: "sidebar",
      name: "Sidebar",
      description: "Collapsible sidebar with chat history",
      code: `<aside className="w-64 bg-slate-900 border-r p-4">
  <button>New Chat</button>
  <div>Recent Chats</div>
</aside>`,
    },
  ]

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Chat UI Kit</h1>
        <p className="text-slate-400 text-sm mt-2">Pre-built components for your chat interface</p>
      </div>

      {/* Components Grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold text-white mb-1">{component.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{component.description}</p>

              {/* Code Block */}
              <div className="bg-slate-900 rounded p-3 mb-3 relative group">
                <pre className="text-xs text-slate-300 overflow-x-auto">
                  <code>{component.code}</code>
                </pre>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyCode(component.code, component.id)}
                  className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition"
                >
                  {copiedId === component.id ? (
                    <Check size={14} className="text-green-400" />
                  ) : (
                    <Copy size={14} className="text-slate-300" />
                  )}
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
              >
                View Component
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
