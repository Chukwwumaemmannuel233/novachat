"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Introducing NovaChat 2.0: The Future of AI Conversations",
    excerpt:
      "We're excited to announce the launch of NovaChat 2.0 with enhanced AI models, faster responses, and new collaboration features.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Product Updates",
    image: "/ai-technology-dashboard.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "How AI is Transforming Customer Support",
    excerpt:
      "Discover how leading companies are using AI-powered chat to revolutionize their customer support operations and improve satisfaction.",
    author: "Michael Rodriguez",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Use Cases",
    image: "/customer-support-team.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Best Practices for Prompt Engineering",
    excerpt: "Learn the art and science of crafting effective prompts to get the most out of your AI conversations.",
    author: "Emily Watson",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Guides",
    image: "/coding-on-laptop.png",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Security and Privacy in AI Applications",
    excerpt:
      "Understanding how we protect your data and maintain the highest security standards in AI-powered applications.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Security",
    image: "/cybersecurity-shield.png",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Building AI Agents for Your Business",
    excerpt: "A comprehensive guide to creating custom AI agents that can automate tasks and improve productivity.",
    author: "Lisa Park",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Tutorials",
    image: "/ai-robot-assistant.png",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    title: "The Evolution of Large Language Models",
    excerpt: "Exploring the history and future of LLMs, from GPT-3 to the latest advancements in AI technology.",
    author: "James Wilson",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "Technology",
    image: "/neural-network-visualization.png",
    gradient: "from-pink-500 to-rose-500",
  },
]

const categories = ["All", "Product Updates", "Use Cases", "Guides", "Security", "Tutorials", "Technology"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            NovaChat
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Stay updated with the latest news, tutorials, and insights about AI technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                category === "All"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <Link href={`/blog/${blogPosts[0].id}`} className="group block">
            <div className="relative bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${blogPosts[0].gradient} text-white text-sm font-medium`}
                  >
                    Featured
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-sm text-slate-400 mb-2">{blogPosts[0].category}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden hover:border-slate-700/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-medium`}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/50">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
