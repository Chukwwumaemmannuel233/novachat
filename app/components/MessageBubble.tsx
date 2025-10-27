"use client"
import { Copy, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

interface Props {
  role: "user" | "ai"
  text: string
  onCopy?: () => void
  onRewrite?: () => void
}

export default function MessageBubble({ role, text, onCopy, onRewrite }: Props) {
  const isUser = role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} w-full group`}>
      <div className="flex flex-col gap-2">
        <div
          className={`rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-relaxed break-words ${
            isUser
              ? "bg-blue-600 text-white max-w-xs sm:max-w-sm md:max-w-md"
              : "bg-gray-700 text-gray-100 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          }`}
        >
          {text}
        </div>

        {isUser && (
          <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCopy}
              className="p-1.5 rounded-lg hover:bg-gray-700 transition"
              title="Copy message"
            >
              <Copy size={14} className="text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRewrite}
              className="p-1.5 rounded-lg hover:bg-gray-700 transition"
              title="Rewrite message"
            >
              <RotateCcw size={14} className="text-gray-400" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}
