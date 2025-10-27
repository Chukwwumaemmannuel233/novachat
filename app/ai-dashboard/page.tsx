"use client"
import { motion } from "framer-motion"
import { ArrowLeft, MessageSquare, TrendingUp, Clock, Zap } from "lucide-react"
import Link from "next/link"

export default function AIDashboardPage() {
  const stats = [
    { label: "Total Chats", value: "24", icon: MessageSquare, color: "from-blue-500 to-blue-600" },
    { label: "Messages Sent", value: "342", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { label: "Avg. Response Time", value: "1.2s", icon: Clock, color: "from-green-500 to-green-600" },
    { label: "AI Interactions", value: "1,250", icon: Zap, color: "from-orange-500 to-orange-600" },
  ]

  const topicStats = [
    { topic: "React Development", count: 45, percentage: 35 },
    { topic: "AI & Machine Learning", count: 38, percentage: 29 },
    { topic: "Web Design", count: 28, percentage: 21 },
    { topic: "Other", count: 20, percentage: 15 },
  ]

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">AI Dashboard</h1>
        <p className="text-slate-400 text-sm mt-2">Your chat statistics and insights</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 border border-slate-700 hover:border-slate-600 transition`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon size={20} className="text-slate-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Topics Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Top Discussion Topics</h2>
            <div className="space-y-4">
              {topicStats.map((topic, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-300">{topic.topic}</span>
                    <span className="text-sm font-semibold text-blue-400">{topic.count} chats</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${topic.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
