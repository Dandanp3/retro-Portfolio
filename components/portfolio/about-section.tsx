"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Gamepad2, Code2, Terminal } from "lucide-react"
import { ABOUT_TEXT } from "@/lib/portfolio-data"

export function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-20 px4 relative">
            <div className="max-w-4xl mx-auto" ref={ref}>
                {/* Title */}
                <motion.div>
                <h2 className="text-2xl md:text-3xl font-pixel text-neon-cyan mb-4">
                    {"// SOBRE MIM"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto"/>
                </motion.div>

                {/* About*/}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group"
                >
                    {/* Glow border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity duration-300"/>
                    
                    {/* Content */}
                    <div className="relative bg-card border-border round-lg p-8 md:p-10">
                        {/* Terminal */}
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                            <div className="w-3 h-3 rounded-full bg-red-500"/>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                            <div className="w-3 h-3 rounded-full bg-green-500"/>
                            <span>about.txt</span>
                        </div>
                    </div>

                </motion.div>










            </div>
        </section>
    )

}