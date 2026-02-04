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
                            <span className="ml-4 text-muted-foreground text-sm font-mono">about.txt</span>
                        </div>

                        {/* Icons */}
                        <div className="flex justify-center gap-8 mb-8">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="p-3 rounded-lg bg-secondary"
                            >
                                <Gamepad2 className="w-8 h-8 text-neon-pink"/>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                className="p-3 rounded-lg bg-secondary"
                            >
                                <Code2 className="w-8 h-8 text-neon-cyan"/>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="p-3 rounded-lg bg-secondary"
                            > 
                                <Terminal className="w-8 h-8 text-neon-green"/>
                            </motion.div>
                        </div>

                        {/* About Text*/}
                        <p className="text-foreground leading-relaxed text-center text-lg">
                            {ABOUT_TEXT}
                        </p>

                        {/* Decorative Corners */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-neon-pink"/>
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-neon-cyan"/>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-neon-green"/>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-neon-green"/>
                    </div>

                </motion.div>










            </div>
        </section>
    )

}