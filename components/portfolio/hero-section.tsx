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
    </section>
  )
}
