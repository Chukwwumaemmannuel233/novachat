"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Bell, Trash2, Check } from "lucide-react"
import Link from "next/link"

interface Notification {
  id: number
  title: string
  message: string
  timestamp: string
  read: boolean
  type: "info" | "success" | "warning"
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Feature",
      message: "Templates library is now available",
      timestamp: "2 hours ago",
      read: false,
      type: "info",
    },
    {
      id: 2,
      title: "Chat Shared",
      message: "Someone shared a chat with you",
      timestamp: "5 hours ago",
      read: false,
      type: "success",
    },
    {
      id: 3,
      title: "Upgrade Available",
      message: "Upgrade to Pro for unlimited chats",
      timestamp: "1 day ago",
      read: true,
      type: "warning",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Bell size={28} className="text-blue-400" />
            Notifications
          </h1>
          <p className="text-slate-400 mb-6">Stay updated with your activity</p>

          <div className="space-y-3">
            {notifications.length === 0 ? (
              <div className="text-center py-12">
                <Bell size={48} className="text-slate-600 mx-auto mb-4 opacity-50" />
                <p className="text-slate-400">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notif, idx) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-4 rounded-lg border transition ${
                    notif.read ? "bg-slate-800/50 border-slate-700/50" : "bg-slate-800 border-blue-500/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{notif.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{notif.message}</p>
                      <p className="text-slate-500 text-xs mt-2">{notif.timestamp}</p>
                    </div>
                    <div className="flex gap-2">
                      {!notif.read && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => markAsRead(notif.id)}
                          className="text-blue-400 hover:text-blue-300 p-2"
                        >
                          <Check size={16} />
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => deleteNotification(notif.id)}
                        className="text-red-400 hover:text-red-300 p-2"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
