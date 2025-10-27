"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Target, Users, Rocket, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We believe AI should be accessible, transparent, and beneficial for everyone.",
  },
  {
    icon: Users,
    title: "User First",
    description: "Every decision we make starts with understanding and serving our users needs.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to stay ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We build together, learn together, and grow together as a global community.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI researcher at OpenAI with 10+ years in machine learning.",
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer specializing in distributed systems and AI infrastructure.",
    image: "/professional-man-cto.jpg",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product leader with experience at Microsoft and Anthropic.",
    image: "/professional-woman-product.jpg",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Full-stack architect who built systems serving millions of users.",
    image: "/professional-engineer.png",
  },
]

export default function AboutPage() {
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Communication
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            NovaChat was founded in 2023 with a simple mission: make advanced AI accessible to everyone. We're a team of
            engineers, designers, and AI researchers passionate about building tools that empower people.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 mb-4 mx-auto">
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-all duration-300">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 mb-4 mx-auto">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-400 text-center mb-3">{member.role}</p>
                  <p className="text-sm text-slate-400 text-center">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented people who share our vision. Check out our open positions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
