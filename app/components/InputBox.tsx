"use client"
import { useState } from "react"
import { Send, Plus, Mic, ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  onSend: () => void
  value: string
  setValue: (value: string) => void
  compact?: boolean
}

export default function InputBox({ onSend, value, setValue }: Props) {
  const isTyping = value.trim().length > 0
  const [showFilePopup, setShowFilePopup] = useState(false)

  const handleFileSelect = (type: "file" | "folder") => {
    console.log(`[v0] Selected ${type}`)
    setShowFilePopup(false)
    // File upload logic would go here
  }

  return (
    <div className="w-full px-0 sm:px-0 py-3 sm:py-4 flex items-center justify-center bg-transparent">
      <div className="flex w-full items-center gap-2 sm:gap-3">
        <div className="relative">
          <button
            onClick={() => setShowFilePopup(!showFilePopup)}
            title="Add attachment"
            className="p-2 rounded-lg hover:bg-gray-800 transition flex-shrink-0"
          >
            <Plus size={18} className="text-gray-400" />
          </button>

          <AnimatePresence>
            {showFilePopup && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowFilePopup(false)}
                  className="fixed inset-0 z-40"
                />

                {/* Popup Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50"
                >
                  <div className="p-2">
                    <button
                      onClick={() => handleFileSelect("file")}
                      className="w-full px-3 py-2.5 text-left text-sm text-gray-200 hover:bg-gray-700 rounded-lg transition flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Upload File
                    </button>
                    <button
                      onClick={() => handleFileSelect("folder")}
                      className="w-full px-3 py-2.5 text-left text-sm text-gray-200 hover:bg-gray-700 rounded-lg transition flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Upload Folder
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Message..."
          className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500"
        />

        <button title="Voice input" className="p-2 rounded-lg hover:bg-gray-800 transition flex-shrink-0">
          <Mic size={18} className="text-gray-400" />
        </button>

        <button
          onClick={onSend}
          className="p-2 sm:p-2.5 rounded-lg transition bg-blue-600 hover:bg-blue-700 text-white flex-shrink-0"
          title="Send"
        >
          {isTyping ? <ArrowUp size={20} /> : <Send size={18} className="opacity-80" />}
        </button>
      </div>
    </div>
  )
}
