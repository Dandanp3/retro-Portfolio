"use client"

import { AboutSection } from "@/components/portfolio/about-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import  { ScrollProgress } from "@/components/portfolio/scroll-progress"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 scanlines pointer-events-none opacity-30"/>

      {/* Scanlines */}
      <div className="fixed inset-0 scanlines pointer-events-none opacity-30"/>

      <ScrollProgress/>

      {/* Sections */}
      <HeroSection />
      <AboutSection/>



    </main>
  )
}