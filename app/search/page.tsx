"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      // Mock search results
      setSearchResults(
        [
          { id: 1, title: "Welcome", preview: "Hey 👋 I'm Nova — how can I help?", date: "Today" },
          { id: 2, title: "React Tips", preview: "Tell me about React hooks...", date: "Yesterday" },
          { id: 3, title: "AI Discussion", preview: "How does machine learning work?", date: "2 days ago" },
        ].filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.preview.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Search Chats</h1>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search your conversations..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {searchQuery.trim() === "" ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Search size={48} className="text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">Start typing to search your chats</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Search size={48} className="text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="space-y-3 max-w-2xl">
            {searchResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-blue-500/50 transition cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition">{result.title}</h3>
                    <p className="text-sm text-slate-400 truncate mt-1">{result.preview}</p>
                    <p className="text-xs text-slate-500 mt-2">{result.date}</p>
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
