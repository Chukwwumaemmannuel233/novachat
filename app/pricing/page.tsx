"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Zap, Crown, Building2 } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      icon: Zap,
      price: "$0",
      period: "forever",
      features: ["10 chats per day", "Basic AI model", "Chat history (7 days)", "Community support"],
      cta: "Current Plan",
      current: true,
    },
    {
      name: "Pro",
      icon: Crown,
      price: "$20",
      period: "per month",
      features: [
        "Unlimited chats",
        "Advanced AI models",
        "Unlimited chat history",
        "Priority support",
        "Custom templates",
        "API access",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Building2,
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "Team management",
        "Advanced analytics",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 w-fit">
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Pricing Plans</h1>
        <p className="text-slate-400 text-sm mt-2">Choose the perfect plan for your needs</p>
      </div>

      {/* Pricing Cards */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-lg border ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-500/10 to-slate-800/50 border-blue-500/50"
                  : "bg-slate-800/50 border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <plan.icon size={24} className={plan.popular ? "text-blue-400" : "text-slate-400"} />
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-2">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={plan.current}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.current
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                    : plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
