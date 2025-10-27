"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  PlusCircle,
  Search,
  MessageSquare,
  Settings,
  BookOpen,
  ChevronDown,
  ChevronRight,
  X,
  MoreVertical,
  Archive,
  Edit3,
  Trash2,
  Share2,
  LayoutDashboard,
  Layers,
  HelpCircle,
  Share,
  Zap,
  Puzzle,
  Bell,
  CreditCard,
  Lock,
  AlertCircle,
} from "lucide-react"

interface Chat {
  id: number
  title: string
}

interface Props {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
  chats: Chat[]
  onNewChat: () => void
  onSelectChat: (id: number) => void
  onDeleteChat: (id: number) => void
  selectedChatId: number | null
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  isDesktop?: boolean
}

export default function ChatSidebar({
  collapsed,
  setCollapsed,
  chats,
  onNewChat,
  onSelectChat,
  onDeleteChat,
  selectedChatId,
  isOpen,
  setIsOpen,
  isDesktop = false,
}: Props) {
  const [recentOpen, setRecentOpen] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [toolsOpen, setToolsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  }

  const mainNavigationItems = [
    { Icon: Search, label: "Search Chat", href: "/search" },
    { Icon: BookOpen, label: "Saved Notes", href: "/saved-notes" },
    { Icon: LayoutDashboard, label: "AI Dashboard", href: "/ai-dashboard" },
    { Icon: Layers, label: "Chat UI Kit", href: "/chat-ui-kit" },
    { Icon: HelpCircle, label: "Help", href: "/help" },
    { Icon: Share, label: "Shared", href: "/shared" },
  ]

  const toolsNavigationItems = [
    { Icon: Puzzle, label: "Integrations", href: "/integrations" },
    { Icon: Zap, label: "Templates", href: "/templates" },
    { Icon: Bell, label: "Notifications", href: "/notifications" },
    { Icon: CreditCard, label: "Billing", href: "/billing" },
    { Icon: Lock, label: "Security", href: "/security" },
    { Icon: AlertCircle, label: "Feedback", href: "/feedback" },
  ]

  if (isDesktop) {
    return (
      <motion.aside
        initial={{ width: collapsed ? 60 : 256 }}
        animate={{ width: collapsed ? 60 : 256 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 shadow-xl flex flex-col relative"
      >
        {/* Header with Logo and Collapse Button */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700/50 bg-slate-900/50">
          {/* Logo and Text - Hidden when collapsed */}
          {!collapsed && (
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-sm flex-shrink-0 shadow-lg">
                🚀
              </div>
              <span className="text-sm font-bold text-white whitespace-nowrap">NovaChat</span>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md hover:bg-blue-500/10 transition flex-shrink-0"
            title={collapsed ? "Expand" : "Collapse"}
          >
            <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <BookOpen size={18} className="text-blue-400" />
            </motion.div>
          </motion.button>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto space-y-2 py-4 px-2">
          {/* New Chat button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewChat}
            className="flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2.5 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition text-sm font-semibold shadow-lg"
            title={collapsed ? "New Chat" : ""}
          >
            <PlusCircle size={16} className="flex-shrink-0" />
            {!collapsed && <span>New Chat</span>}
          </motion.button>

          {/* Main Navigation Items */}
          {mainNavigationItems.map(({ Icon, label, href }) => (
            <Link key={label} href={href}>
              <motion.div
                whileHover={{ x: collapsed ? 0 : 4, backgroundColor: "rgba(148, 163, 184, 0.1)" }}
                className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/40 transition text-sm cursor-pointer"
                title={collapsed ? label : ""}
              >
                <Icon size={16} className="flex-shrink-0" />
                {!collapsed && <span>{label}</span>}
              </motion.div>
            </Link>
          ))}

          {!collapsed && (
            <div className="pt-2 border-t border-slate-700/50">
              <motion.button
                whileHover={{ backgroundColor: "rgba(148, 163, 184, 0.1)" }}
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center justify-between w-full rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/40 transition text-sm"
              >
                <span className="font-semibold">Tools</span>
                <motion.div animate={{ rotate: toolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1 mt-1 pl-2"
                  >
                    {toolsNavigationItems.map(({ Icon, label, href }) => (
                      <Link key={label} href={href}>
                        <motion.div
                          whileHover={{ x: 4, backgroundColor: "rgba(148, 163, 184, 0.1)" }}
                          className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700/40 transition text-sm"
                        >
                          <Icon size={14} className="flex-shrink-0" />
                          <span>{label}</span>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Recent Chats */}
          {!collapsed && (
            <div className="pt-4 border-t border-slate-700/50">
              <div
                className="mb-3 flex items-center justify-between cursor-pointer select-none px-1"
                onClick={() => setRecentOpen(!recentOpen)}
              >
                <h3 className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Recent Chats</h3>
                {recentOpen ? (
                  <ChevronDown size={14} className="text-slate-400" />
                ) : (
                  <ChevronRight size={14} className="text-slate-400" />
                )}
              </div>

              {recentOpen && (
                <div className="space-y-1">
                  {chats.length === 0 ? (
                    <p className="text-xs text-slate-500 px-1">No chats yet</p>
                  ) : (
                    chats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`relative flex items-center gap-2 px-3 py-2 rounded-md group text-sm transition-all ${
                          selectedChatId === chat.id
                            ? "bg-blue-600/20 text-blue-100 border border-blue-500/30"
                            : "text-slate-300 hover:bg-slate-700/40"
                        }`}
                      >
                        <MessageSquare size={14} className="flex-shrink-0" />
                        <motion.button
                          whileHover={{ x: 2 }}
                          onClick={() => onSelectChat(chat.id)}
                          className="text-sm truncate flex-1 text-left"
                        >
                          {chat.title}
                        </motion.button>

                        <div className="relative" ref={dropdownRef}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenDropdown(openDropdown === chat.id ? null : chat.id)
                            }}
                            className="text-slate-400 hover:text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                          >
                            <MoreVertical size={14} />
                          </motion.button>

                          <AnimatePresence>
                            {openDropdown === chat.id && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 py-1"
                              >
                                <motion.button
                                  whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenDropdown(null)
                                  }}
                                  className="flex items-center gap-2 w-full px-3 py-2 text-slate-300 hover:text-white text-sm transition"
                                >
                                  <Archive size={14} />
                                  Archive
                                </motion.button>
                                <motion.button
                                  whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenDropdown(null)
                                  }}
                                  className="flex items-center gap-2 w-full px-3 py-2 text-slate-300 hover:text-white text-sm transition"
                                >
                                  <Edit3 size={14} />
                                  Rename
                                </motion.button>
                                <motion.button
                                  whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    onDeleteChat(chat.id)
                                    setOpenDropdown(null)
                                  }}
                                  className="flex items-center gap-2 w-full px-3 py-2 text-red-400 hover:text-red-300 text-sm transition"
                                >
                                  <Trash2 size={14} />
                                  Delete
                                </motion.button>
                                <motion.button
                                  whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.6)" }}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenDropdown(null)
                                  }}
                                  className="flex items-center gap-2 w-full px-3 py-2 text-slate-300 hover:text-white text-sm transition"
                                >
                                  <Share2 size={14} />
                                  Share
                                </motion.button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-slate-700/50 p-2 rounded-lg bg-slate-900/60 flex items-center justify-center gap-2 mx-2 mb-2">
          <Link href="/settings">
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              className="text-slate-400 hover:text-blue-400 transition p-1.5 flex-shrink-0"
            >
              <Settings size={16} />
            </motion.button>
          </Link>

          {!collapsed && (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img
                src="https://media.istockphoto.com/id/2192499195/photo/studio-portrait-of-happy-multiracial-mid-adult-man-wearing-brown-shirt-toothy-smile.jpg?s=612x612&w=0&k=20&c=QO9XdwXJdi9xyqsKWnamn41hPTOMFEHx3P9v4zDvbOk="
                alt="User"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-blue-500/30"
                loading="lazy"
              />
              <div className="transition-all duration-300 min-w-0">
                <p className="text-white text-sm font-semibold truncate">User Name</p>
                <p className="text-slate-400 text-xs truncate">Free Plan</p>
              </div>
            </div>
          )}
        </div>
      </motion.aside>
    )
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-screen z-40 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 shadow-xl transition-all duration-300 flex flex-col w-64 sm:w-72 lg:hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-900/50">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition"
          >
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-sm shadow-lg">
              🚀
            </div>
            <span className="text-sm">NovaChat</span>
          </button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md hover:bg-slate-700/40 transition"
          >
            <X size={20} className="text-slate-300" />
          </motion.button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-3 py-4">
          {/* New Chat button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              onNewChat()
              setIsOpen(false)
            }}
            className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
          >
            <PlusCircle size={16} />
            <span>New Chat</span>
          </motion.button>

          {/* Main Navigation Items */}
          {mainNavigationItems.map(({ Icon, label, href }) => (
            <Link key={label} href={href}>
              <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800/60 hover:text-white transition text-sm cursor-pointer"
              >
                <Icon size={16} />
                <span>{label}</span>
              </motion.div>
            </Link>
          ))}

          <motion.button
            whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.6)" }}
            onClick={() => setToolsOpen(!toolsOpen)}
            className="flex items-center justify-between w-full rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800/60 hover:text-white transition text-sm"
          >
            <span className="font-semibold">Tools</span>
            <motion.div animate={{ rotate: toolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {toolsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 pl-2"
              >
                {toolsNavigationItems.map(({ Icon, label, href }) => (
                  <Link key={label} href={href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 w-full rounded-md px-3 py-2 text-gray-400 hover:bg-gray-800/60 hover:text-white transition text-sm"
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Recent Chats */}
          <div className="pt-3 border-t border-gray-800">
            <div
              className="mb-2 flex items-center justify-between cursor-pointer select-none"
              onClick={() => setRecentOpen(!recentOpen)}
            >
              <h3 className="text-xs uppercase text-gray-400 font-medium">Recent Chats</h3>
              {recentOpen ? (
                <ChevronDown size={14} className="text-gray-400" />
              ) : (
                <ChevronRight size={14} className="text-gray-400" />
              )}
            </div>

            {recentOpen && (
              <div className="space-y-1">
                {chats.length === 0 ? (
                  <p className="text-xs text-gray-500">No chats yet</p>
                ) : (
                  chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`relative flex items-center gap-2 px-3 py-2 rounded-md group text-sm ${
                        selectedChatId === chat.id ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800/60"
                      }`}
                    >
                      <MessageSquare size={14} className="flex-shrink-0" />
                      <motion.button
                        whileHover={{ x: 2 }}
                        onClick={() => {
                          onSelectChat(chat.id)
                          setIsOpen(false)
                        }}
                        className="text-sm truncate flex-1 text-left"
                      >
                        {chat.title}
                      </motion.button>

                      <div className="relative" ref={dropdownRef}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === chat.id ? null : chat.id)
                          }}
                          className="text-gray-400 hover:text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                        >
                          <MoreVertical size={14} />
                        </motion.button>

                        <AnimatePresence>
                          {openDropdown === chat.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: -10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: -10 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 mt-2 w-36 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 py-1"
                            >
                              <motion.button
                                whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setOpenDropdown(null)
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-gray-300 hover:text-white text-sm transition"
                              >
                                <Archive size={14} />
                                Archive
                              </motion.button>
                              <motion.button
                                whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setOpenDropdown(null)
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-gray-300 hover:text-white text-sm transition"
                              >
                                <Edit3 size={14} />
                                Rename
                              </motion.button>
                              <motion.button
                                whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  onDeleteChat(chat.id)
                                  setOpenDropdown(null)
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-red-400 hover:text-red-300 text-sm transition"
                              >
                                <Trash2 size={14} />
                                Delete
                              </motion.button>
                              <motion.button
                                whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setOpenDropdown(null)
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-gray-300 hover:text-white text-sm transition"
                              >
                                <Share2 size={14} />
                                Share
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-slate-700/50 p-3 rounded-lg bg-slate-900/60 flex items-center gap-3">
          <Link href="/settings">
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              className="text-slate-400 hover:text-blue-400 transition p-1"
            >
              <Settings size={16} />
            </motion.button>
          </Link>

          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img
              src="https://media.istockphoto.com/id/2192499195/photo/studio-portrait-of-happy-multiracial-mid-adult-man-wearing-brown-shirt-toothy-smile.jpg?s=612x612&w=0&k=20&c=QO9XdwXJdi9xyqsKWnamn41hPTOMFEHx3P9v4zDvbOk="
              alt="User"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-blue-500/30"
              loading="lazy"
            />
            <div className="transition-all duration-300 min-w-0">
              <p className="text-white text-sm font-semibold truncate">User Name</p>
              <p className="text-slate-400 text-xs truncate">Free Plan</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
