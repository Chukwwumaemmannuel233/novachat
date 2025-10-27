"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Send, MessageCircle, Clock, Users, Zap } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  sender: "user" | "support"
  text: string
  timestamp: string
}

export default function LiveChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "support",
      text: "Hello! Welcome to NovaChat support. How can we help you today?",
      timestamp: "10:30 AM",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setInputValue("")

      // Simulate support response
      setTimeout(() => {
        const responses = [
          "Thanks for your message! Our team is looking into this.",
          "Great question! Let me help you with that.",
          "I understand. Can you provide more details?",
          "We appreciate your feedback!",
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "support",
            text: randomResponse,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Contact
          </Link>
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">Online</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-slate-800/50 p-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  Support Team
                </h2>
                <p className="text-sm text-slate-400 mt-1">Average response time: 2 minutes</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-slate-800 text-slate-100 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-slate-800/50 p-4 bg-slate-950/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Support Info */}
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Support Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-white">Available Hours</p>
                    <p className="text-xs text-slate-400">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-white">Support Team</p>
                    <p className="text-xs text-slate-400">5 agents online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-white">Response Time</p>
                    <p className="text-xs text-slate-400">Usually 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Check our Help Center first</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Provide detailed information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Include error messages if any</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Be patient, we'll help soon</span>
                </li>
              </ul>
            </div>

            {/* Help Center Link */}
            <Link
              href="/help"
              className="block w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-center text-white transition-colors"
            >
              Visit Help Center
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
