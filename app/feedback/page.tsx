"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Send, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("bug")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (message.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setMessage("")
        setSubmitted(false)
      }, 3000)
    }
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
            <AlertCircle size={28} className="text-blue-400" />
            Send Feedback
          </h1>
          <p className="text-slate-400 mb-8">Help us improve NovaChat</p>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
            {/* Feedback Type */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">Feedback Type</label>
              <div className="grid grid-cols-3 gap-3">
                {["bug", "feature", "other"].map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setFeedbackType(type)}
                    className={`py-2 px-3 rounded-lg transition capitalize ${
                      feedbackType === type
                        ? "bg-blue-600 text-white"
                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think..."
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!message.trim()}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              <Send size={18} />
              {submitted ? "Thank you!" : "Send Feedback"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
