"use client"
import { useState, useEffect, useRef } from "react"
import MessageBubble from "./MessageBubble"
import InputBox from "./InputBox"

interface Message {
  role: "user" | "ai"
  text: string
}
interface Chat {
  id: number
  title: string
  messages: Message[]
}
interface Props {
  chat: Chat
  onSendMessage: (msg: string) => void
}

export default function ChatWindow({ chat, onSendMessage }: Props) {
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [chat.messages.length])

  const handleSend = () => {
    if (!input.trim()) return
    onSendMessage(input.trim())
    setInput("")
  }

  const isNew = chat.messages.length === 0

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {isNew ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 text-center text-balance max-w-sm sm:max-w-md md:max-w-lg">
            How can I help you today?
          </h1>
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mt-8 sm:mt-10">
            <InputBox onSend={handleSend} value={input} setValue={setInput} compact />
          </div>
        </div>
      ) : (
        <>
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto gap-3 sm:gap-4">
              {chat.messages.map((m, i) => (
                <MessageBubble key={i} role={m.role} text={m.text} />
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 border-t border-gray-800 bg-gray-900/60 flex justify-center px-3 sm:px-4 pb-safe">
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
              <InputBox onSend={handleSend} value={input} setValue={setInput} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
