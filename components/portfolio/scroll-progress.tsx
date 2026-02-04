"useclient"

import { motion, useScroll, useSpring } from "framer-motion"
import { useState, useEffect, use } from "react"

export function ScrollProgress() {
    const {  scrollYProgress }  = useScroll()
    const [percentage, setPercentage]  = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setPercentage(Math.round(latest * 100))
            setIsVisible(latest > 0.02)
        })
        return () =>  unsubscribe()
    }), [scrollYProgress]

    return (
        <motion.div
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2"
        >
            {/*  XP Label */}
            <div className="font-pixel text-xs text-neon-cyan">XP</div>

            {/* Progress Bar */}
            <div className="relative w-6 h-48 bg-card border-2 border-neon-cyan rounded-full overflow-hidden">
                <div className="absolute inset-0 opacity-45">
                    {[...Array(12)].map((_, i) => (
                        <div
                        key={i}
                        className="h-4 border-b border-neon-cyan/30"
                        />
                    ))}
                </div>

                {/* Progress Fill */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neon-green via-neon-cyan to-neon-pink origin-bottom"
                    style={{ scaleY }}
                />

                {/* Glow Effect */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0  pointer-events-none"
                    style={{  
                        height: `${percentage}%`,
                        boxShadow: "0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan), inset 0 0 10px var(--neon-cyan)",
                     }}
                />

                {/* Level Markers*/}
                <div className="absolute left-0 rigt-0 top-1/4 h-0.5  bg-neon-yellow/50"/>
                <div className="absolute left-0 rigt-0 top-1/2 h-0.5  bg-neon-yellow/50"/>
                <div className="absolute left-0 rigt-0 top-3/4 h-0.5  bg-neon-yellow/50"/>
            </div>

            {/* Percentage Display  */}
            <motion.div>
                {percentage}%
            </motion.div>
        </motion.div>
    )
}