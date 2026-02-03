"use client"

import { motion } from "framer-motion"
import { ChevronDown, Gamepad2, Code, Terminal } from "lucide-react"
import { HERO } from "@/lib/portfolio-data"
import { Smokum } from "next/font/google"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden retro-grid">
      {/* conteúdo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0.3,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* ICONS */}
        <motion.div
        className="absolute -top-20 -lef-10 text-neon-pink opacity-30"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <Gamepad2 size={60} />
        </motion.div>
        <motion.div
          className="absolute -top-10 -right-10 text-neon-cyan opacity-30"
          animate={{y: [0, 10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY}}
        >
          <Code size={50} />
        </motion.div>
        <motion.div
        className="absolute bottom-0 right-0 text-neon-green opacity-30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Terminal size={45} />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-neon-cyan text-sm md:text-base mb-4 font-pixel tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"< PLAYER 1 READY />"}
          </motion.p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-foreground mb-6 leading-relaxed neon-text-pink">
            {HERO.greeting}
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
