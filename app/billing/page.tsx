"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Download } from "lucide-react"
import Link from "next/link"

interface Invoice {
  id: string
  date: string
  amount: number
  status: "paid" | "pending"
}

export default function BillingPage() {
  const invoices: Invoice[] = [
    { id: "INV-001", date: "Nov 1, 2024", amount: 9.99, status: "paid" },
    { id: "INV-002", date: "Oct 1, 2024", amount: 9.99, status: "paid" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <CreditCard size={28} className="text-blue-400" />
            Billing
          </h1>
          <p className="text-slate-400 mb-8">Manage your subscription and invoices</p>

          {/* Current Plan */}
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Current Plan</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400 text-sm">Plan</p>
                <p className="text-white font-semibold">Pro</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Billing Cycle</p>
                <p className="text-white font-semibold">Monthly</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Next Billing Date</p>
                <p className="text-white font-semibold">Dec 1, 2024</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Amount</p>
                <p className="text-white font-semibold">$9.99/month</p>
              </div>
            </div>
          </div>

          {/* Invoices */}
          <h2 className="text-xl font-semibold text-white mb-4">Invoices</h2>
          <div className="space-y-3">
            {invoices.map((invoice, idx) => (
              <motion.div
                key={invoice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition"
              >
                <div>
                  <p className="font-semibold text-white">{invoice.id}</p>
                  <p className="text-slate-400 text-sm">{invoice.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-white">${invoice.amount}</p>
                    <p className={`text-xs ${invoice.status === "paid" ? "text-green-400" : "text-yellow-400"}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </p>
                  </div>
                  <motion.button whileHover={{ scale: 1.1 }} className="text-blue-400 hover:text-blue-300 p-2">
                    <Download size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
