"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Key, Copy, Plus, Trash2, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function IntegrationsPage() {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: "Production API", key: "sk_live_abc123...", created: "2024-01-15", visible: false },
    { id: 2, name: "Development API", key: "sk_test_def456...", created: "2024-01-10", visible: false },
  ])

  const toggleVisibility = (id: number) => {
    setApiKeys(apiKeys.map((key) => (key.id === id ? { ...key, visible: !key.visible } : key)))
  }

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">API & Integrations</h1>
        <p className="text-slate-400 text-sm mt-2">Manage your API keys and integrations</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Create New Key */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-4 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/20 transition flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            <span className="font-semibold">Create New API Key</span>
          </motion.button>

          {/* API Keys List */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Key size={20} className="text-blue-400" />
              <h2 className="text-xl font-bold text-white">Your API Keys</h2>
            </div>
            <div className="space-y-3">
              {apiKeys.map((apiKey, index) => (
                <motion.div
                  key={apiKey.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{apiKey.name}</h3>
                      <p className="text-xs text-slate-400">Created on {apiKey.created}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleVisibility(apiKey.id)}
                        className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition"
                        title={apiKey.visible ? "Hide" : "Show"}
                      >
                        {apiKey.visible ? <EyeOff size={16} /> : <Eye size={16} />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyKey(apiKey.key)}
                        className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition"
                        title="Copy"
                      >
                        <Copy size={16} />
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
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded font-mono text-sm text-slate-300">
                    {apiKey.visible ? apiKey.key : "••••••••••••••••"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Usage Stats */}
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">API Usage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-400 mb-1">Requests Today</p>
                <p className="text-2xl font-bold text-white">1,234</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Rate Limit</p>
                <p className="text-2xl font-bold text-white">10,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Remaining</p>
                <p className="text-2xl font-bold text-white">8,766</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
