"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Camera, Mail, MapPin, Calendar, Award, TrendingUp, MessageSquare, Clock, Edit2, Save } from "lucide-react"
import { useState, useRef } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)
  const profileInputRef = useRef<HTMLInputElement>(null)

  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "AI enthusiast and developer passionate about building intelligent applications. Always exploring new ways to leverage AI for solving real-world problems.",
    location: "San Francisco, CA",
    joinDate: "January 2024",
  })

  const stats = [
    { label: "Total Chats", value: "1,234", icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
    { label: "Hours Saved", value: "156", icon: Clock, color: "from-purple-500 to-pink-500" },
    { label: "Achievements", value: "12", icon: Award, color: "from-green-500 to-emerald-500" },
    { label: "Streak Days", value: "45", icon: TrendingUp, color: "from-orange-500 to-red-500" },
  ]

  const recentActivity = [
    { action: "Created new chat", title: "Product Launch Strategy", time: "2 hours ago" },
    { action: "Saved template", title: "Email Marketing Copy", time: "5 hours ago" },
    { action: "Shared conversation", title: "Technical Documentation", time: "1 day ago" },
    { action: "Completed tutorial", title: "Advanced Prompt Engineering", time: "2 days ago" },
  ]

  const achievements = [
    { title: "Early Adopter", description: "Joined in the first month", icon: "🚀" },
    { title: "Power User", description: "1000+ conversations", icon: "⚡" },
    { title: "Team Player", description: "Shared 50+ chats", icon: "🤝" },
    { title: "Streak Master", description: "30 day streak", icon: "🔥" },
  ]

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCoverImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden"
        >
          {/* Cover Image */}
          <div className="relative h-40 sm:h-56 lg:h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden group">
            {coverImage && (
              <img src={coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
            )}
            <button
              onClick={() => coverInputRef.current?.click()}
              className="absolute bottom-4 right-4 p-3 bg-slate-900/80 backdrop-blur-sm rounded-lg text-white hover:bg-slate-800 transition-colors"
            >
              <Camera className="w-5 h-5" />
            </button>
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="hidden"
            />
          </div>

          {/* Profile Info Section */}
          <div className="px-6 sm:px-8 lg:px-12 py-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
              {/* Avatar */}
              <div className="relative flex-shrink-0 -mt-20 lg:-mt-28 mb-6 lg:mb-0">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-900 flex items-center justify-center text-5xl lg:text-6xl font-bold text-white overflow-hidden group">
                  {profileImage ? (
                    <img
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "AJ"
                  )}
                  <button
                    onClick={() => profileInputRef.current?.click()}
                    className="absolute bottom-3 right-3 p-3 bg-slate-900 rounded-lg text-white hover:bg-slate-800 transition-colors border border-slate-700"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <input
                  ref={profileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageUpload}
                  className="hidden"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="text-3xl lg:text-4xl font-bold text-white bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2 mb-4 w-full"
                      />
                    ) : (
                      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{profileData.name}</h1>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{profileData.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{profileData.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Joined {profileData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4" />
                        Save Profile
                      </>
                    ) : (
                      <>
                        <Edit2 className="w-4 h-4" />
                        Edit Profile
                      </>
                    )}
                  </button>
                </div>

                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    rows={3}
                    className="w-full text-slate-300 leading-relaxed bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3"
                  />
                ) : (
                  <p className="text-slate-300 leading-relaxed text-lg">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700/50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-2 mb-4`}>
                <stat.icon className="w-full h-full text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-800/50 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400">{activity.action}</p>
                    <p className="text-white font-medium truncate">{activity.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition-colors"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-1">{achievement.title}</h3>
                  <p className="text-xs text-slate-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
