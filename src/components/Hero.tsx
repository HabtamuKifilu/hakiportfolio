'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'
import AnimatedSphere from './AnimatedSphere'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedSphere />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Habtamu Kifilu
        </motion.h1>

        {/* Title + Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <p className="text-3xl md:text-5xl font-light text-gray-200 mb-4">
            Senior Software Engineer
          </p>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            building high-scale, resilient systems with Java/Spring Boot, React/Next.js, TypeScript, and modern cloud-native architectures — currently focused on creating inclusive digital platforms that serve millions in emerging markets.
          </p>
        </motion.div>

        {/* PRO BUTTONS — FIXED & FLAWLESS */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {/* Primary: Explore Work */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-14 py-6 overflow-hidden rounded-2xl font-bold text-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-4">
              Explore My Work <ExternalLink size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000" />
          </motion.a>

          {/* Secondary: Resume */}
          <motion.a
            href="/Habtamu_Kifilu_Fite.pdf"
            download
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-14 py-6 rounded-2xl font-bold text-xl border-2 border-cyan-400/60 backdrop-blur-xl bg-slate-900/40 text-cyan-300 hover:bg-cyan-400/10 transition-all duration-500 flex items-center gap-4 shadow-2xl"
          >
            <Download size={28} />
            Download Resume
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-6 bg-cyan-400 rounded-full mt-3"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
