"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Mail } from "lucide-react"

export default function FooterMenu() {
  const footerLinks = [
    { Icon: FileText, label: "Privacy", href: "/privacy" },
    { Icon: FileText, label: "Terms", href: "/terms" },
    { Icon: Mail, label: "Feedback", href: "/feedback" },
  ]

  return (
    <div className="flex items-center justify-center gap-2 px-2 py-2 border-t border-slate-700/50">
      {footerLinks.map(({ Icon, label, href }) => (
        <Link key={label} href={href}>
          <motion.button
            whileHover={{ scale: 1.1, color: "#60a5fa" }}
            className="text-slate-400 hover:text-blue-400 transition p-1.5 flex-shrink-0"
            title={label}
          >
            <Icon size={14} />
          </motion.button>
        </Link>
      ))}
    </div>
  )
}
