"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lock, Smartphone, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SecurityPage() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)

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
            <Lock size={28} className="text-blue-400" />
            Account Security
          </h1>
          <p className="text-slate-400 mb-8">Manage your security settings</p>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg mb-4"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Password</h2>
            <p className="text-slate-400 text-sm mb-4">Last changed 3 months ago</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Change Password
            </motion.button>
          </motion.div>

          {/* Two-Factor Authentication */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg mb-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-blue-400" />
                <div>
                  <h2 className="text-lg font-semibold text-white">Two-Factor Authentication</h2>
                  <p className="text-slate-400 text-sm">{twoFAEnabled ? "Enabled" : "Disabled"}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setTwoFAEnabled(!twoFAEnabled)}
                className={`px-4 py-2 rounded-lg transition ${
                  twoFAEnabled
                    ? "bg-red-600/20 text-red-400 hover:bg-red-600/30"
                    : "bg-green-600/20 text-green-400 hover:bg-green-600/30"
                }`}
              >
                {twoFAEnabled ? "Disable" : "Enable"}
              </motion.button>
            </div>
          </motion.div>

          {/* Active Sessions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg"
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <LogOut size={20} className="text-blue-400" />
              Active Sessions
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                <div>
                  <p className="text-white font-medium">Chrome on Windows</p>
                  <p className="text-slate-400 text-sm">Current session</p>
                </div>
                <span className="text-green-400 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                <div>
                  <p className="text-white font-medium">Safari on iPhone</p>
                  <p className="text-slate-400 text-sm">Last active 2 hours ago</p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} className="text-red-400 hover:text-red-300 text-sm">
                  Sign Out
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
