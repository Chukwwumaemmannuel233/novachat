"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <div className="flex items-center gap-3">
          <Shield size={28} className="text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
        <p className="text-slate-400 text-sm mt-2">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto prose prose-invert prose-slate"
        >
          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
              <p className="leading-relaxed">
                NovaChat is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
                safeguard your information when you use our AI chat service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-2">We collect information that you provide directly to us:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Account information (name, email, password)</li>
                <li>Chat messages and conversation history</li>
                <li>Usage data and preferences</li>
                <li>Payment information (processed securely)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and improve our AI chat services</li>
                <li>Personalize your experience</li>
                <li>Process payments and subscriptions</li>
                <li>Send important updates and notifications</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your data. All communications are encrypted,
                and we regularly audit our systems for vulnerabilities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
              <p className="leading-relaxed mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Request data deletion</li>
                <li>Export your chat history</li>
                <li>Opt-out of marketing communications</li>
                <li>Update your preferences at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@novachat.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
