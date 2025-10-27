"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, User, Bell, Lock, Palette, Globe, Trash2 } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "User Name",
    email: "user@example.com",
    theme: "dark",
    language: "English",
    notifications: true,
    dataRetention: "1 year",
  })

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 text-sm mt-2">Manage your account and preferences</p>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-3xl space-y-6">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <User size={20} className="text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 block mb-2">Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 block mb-2">Email</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Appearance Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Palette size={20} className="text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 block mb-2">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Language Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Language</h2>
            </div>
            <div>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
          </motion.div>

          {/* Notifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bell size={20} className="text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Enable notifications</span>
              <button
                onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.notifications ? "bg-blue-500" : "bg-slate-700"
                }`}
              >
                <motion.div
                  animate={{ x: settings.notifications ? 24 : 2 }}
                  className="absolute top-1 w-4 h-4 bg-white rounded-full"
                />
              </button>
            </div>
          </motion.div>

          {/* Privacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock size={20} className="text-blue-400" />
              <h2 className="text-lg font-semibold text-white">Privacy</h2>
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-2">Data Retention</label>
              <select
                value={settings.dataRetention}
                onChange={(e) => setSettings({ ...settings, dataRetention: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="1 month">1 Month</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
                <option value="forever">Forever</option>
              </select>
            </div>
          </motion.div>

          {/* Danger Zone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trash2 size={20} className="text-red-400" />
              <h2 className="text-lg font-semibold text-white">Danger Zone</h2>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-lg text-sm transition">
              Delete Account
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
