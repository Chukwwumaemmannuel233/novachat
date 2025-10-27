"use client"
import { motion } from "framer-motion"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <div className="flex items-center gap-3">
          <FileText size={28} className="text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Terms of Service</h1>
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
              <h2 className="text-xl font-bold text-white mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using NovaChat, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Use License</h2>
              <p className="leading-relaxed mb-2">
                Permission is granted to temporarily use NovaChat for personal, non-commercial use only. This license
                shall automatically terminate if you violate any of these restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">User Responsibilities</h2>
              <p className="leading-relaxed mb-2">You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Not use the service for illegal purposes</li>
                <li>Not attempt to harm or disrupt the service</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Service Availability</h2>
              <p className="leading-relaxed">
                We strive to provide reliable service but do not guarantee uninterrupted access. We reserve the right to
                modify or discontinue the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                NovaChat shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the service after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@novachat.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
