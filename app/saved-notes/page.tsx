"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { BookMarked, ArrowLeft, Trash2, Copy } from "lucide-react"
import Link from "next/link"

export default function SavedNotesPage() {
  const [notes, setNotes] = useState([
    { id: 1, content: "React hooks are functions that let you use state and other React features", date: "Today" },
    {
      id: 2,
      content: "Always use useCallback for memoized functions in performance-critical components",
      date: "Yesterday",
    },
    { id: 3, content: "The useEffect cleanup function runs before the component unmounts", date: "2 days ago" },
  ])

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const copyNote = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Saved Notes</h1>
        <p className="text-slate-400 text-sm mt-2">Your collection of important messages and snippets</p>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <BookMarked size={48} className="text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">No saved notes yet</p>
            <p className="text-slate-500 text-sm mt-2">Save important messages from your chats</p>
          </div>
        ) : (
          <div className="space-y-3 max-w-2xl">
            {notes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-white text-sm leading-relaxed">{note.content}</p>
                    <p className="text-xs text-slate-500 mt-3">{note.date}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyNote(note.content)}
                      className="p-2 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition"
                      title="Copy"
                    >
                      <Copy size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => deleteNote(note.id)}
                      className="p-2 hover:bg-red-500/10 rounded-md text-slate-400 hover:text-red-400 transition"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
