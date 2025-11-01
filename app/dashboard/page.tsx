"use client";
import { useState } from "react";
import Link from "next/link";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import { Menu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Chat, Message } from "../types";


// interface Message {
//   role: "user" | "ai";
//   text: string;
// }
// interface Chat {
//   id: string;
//   title: string;
//   messages: Message[];
// }

export default function ChatLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    { id: "1", title: "New Chat", messages: [] },
  ]);
  const [selectedChatId, setSelectedChatId] = useState<string>(chats[0].id);

  const handleNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
    }; // ✅ string id
    setChats((prev) => [newChat, ...prev]);
    setSelectedChatId(newChat.id);
  };

  const handleSelectChat = (id: string) => {
    // ✅ string id
    setSelectedChatId(id);
    setIsOpen(false);
  };

  const handleDeleteChat = (id: string) => {
    // ✅ string id
    setChats((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      if (selectedChatId === id) {
        if (updated.length > 0) {
          setSelectedChatId(updated[0].id);
        } else {
          const newChat = {
            id: Date.now().toString(),
            title: "New Chat",
            messages: [],
          }; // ✅ string id
          setSelectedChatId(newChat.id);
          return [newChat];
        }
      }
      return updated;
    });
  };

  const handleSendMessage = (message: string) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              title:
                chat.title === "New Chat" && message
                  ? message.slice(0, 20)
                  : chat.title,
              messages: [...chat.messages, { role: "user", text: message }],
            }
          : chat
      )
    );

    setTimeout(() => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === selectedChatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { role: "ai", text: `AI: I heard "${message}"` },
                ],
              }
            : chat
        )
      );
    }, 700);
  };

  const selectedChat = chats.find((c) => c.id === selectedChatId) || null;

  return (
    <div className="h-dvh w-full flex bg-gray-950 overflow-hidden relative">
      <div className="hidden lg:flex h-full">
        <ChatSidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          chats={chats}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
          selectedChatId={selectedChatId}
          isOpen={true}
          setIsOpen={() => {}}
          isDesktop={true}
        />
      </div>

      {/* Mobile Sidebar */}
      <ChatSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
        selectedChatId={selectedChatId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDesktop={false}
      />

      {/* Mobile Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 right-0 z-20 lg:hidden flex items-center justify-between px-4 py-3 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-300 hover:text-white transition"
          title="Open menu"
        >
          <Menu size={24} />
        </motion.button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300 font-medium">Upgrade</span>
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition"
            >
              <Zap size={14} />
              <span className="hidden sm:inline">Pro</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <main className="flex-1 h-full transition-all duration-200 pt-14 lg:pt-0 overflow-hidden">
        {selectedChat && (
          <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
        )}
      </main>
    </div>
  );
}
