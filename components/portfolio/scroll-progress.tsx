"useclient"

import { motion, AnimatePresence, isNear} from "framer-motion"
import { useState, useEffect } from "react"

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(Math.min(100, Math.max(0, progress)));
            setIsVisible(scrollTop > 200);;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isNearComplete = scrollProgress >= 90;
    const isComplete = scrollProgress === 100;

    return (
        <AnimatePresence>
            {isVisible &&(
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
                >

                    {/* XP LABEL */}
                    <motion.div
                        className="font-pixel text-[8px] text-neon-cyan writing-vertical"
                        animate={{
                            textShadow: isNearComplete
                            ? [
                                "0 0 10px var(--neon-cyan)",
                                " 0 0 20px var(--neon-cyan)",
                                "0 0 10px var(--neon-cyan)",
                              ]
                            : "none",

                        }}
                        transition={{ duration: 1, repeat: isNearComplete ? Number.POSITIVE_INFINITY : 0 }}
                    >
                        XP
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="relative w-4 h-48 bg-card border border-neon-cyan/50 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-gradient-to-t from-neon-cyan via-neon-green to-neon-yellow rounded-full"
                            style={{ height: `${scrollProgress}%` }}
                            animate={{
                                boxShadow: isNearComplete
                                ? [
                                    "0 0 10px var(--neon-cyan)",
                                    "0 0 30px var(--neon-green)",
                                    "0 0 10px var(--neon-cyan)",
                                  ]
                                : "none",
                            }}
                            transition={{
                                height: { type: "spring", stiffness: 100, damping: 20 },
                                boxShadow: { duration: 1.5, repeat: isNearComplete ? Number.POSITIVE_INFINITY : 0 },
                            }}
                        />
                        
                        {/* Grid Lines*/}
                        <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="h-px w-full bg-neon-cyan/20"
                                    animate={{
                                        opacity: isNearComplete ? [0.2, 0.8, 0.2] : 0.2,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.1,
                                        repeat: isNearComplete ? Number.POSITIVE_INFINITY : 0,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Effects when near complete */}
                        {isNearComplete && (
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                                        initial={{ y: "100%", x: "50%", opacity: 0 }}
                                        animate={{
                                            y: ["-10%", "-100%"],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            delay: i * 0.3,
                                            repeat: Number.POSITIVE_INFINITY,
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pokeball Style*/}
                    <motion.div
                        animate={{
                            scale: isComplete ? [1, 1.3, 1] : isNearComplete ? [1, 1.1, 1] : 1,
                            rotate: isComplete ? [0, 360] : 0,
                        }}
                        transition={{
                            scale:{
                                duration: isComplete ? 0.6 : 0.8,
                                repeat: isNearComplete && !isComplete ? Number.POSITIVE_INFINITY : 0,
                            },
                            rotate: { duration: 0.6 },
                        }}
                        className="relative w-8 h-8"
                        style={{
                            filter: isNearComplete ? "drop-shadow(0 0 0 8px var(--neon-cyan))" : "none",
                        }}
                    >
                        {/* Pokeball Top */}
                        <motion.div
                            className="absolute inset-x-0 top-0 h-1/2 rounded-t-full border-2 border-neon-cyan"
                            style={{
                                background: `linear-gradient(to bottom, var(--neon-cyan) ${scrollProgress}%, transparent ${scrollProgress}%)`,
                            }}
                            animate={{
                                borderColor: isComplete ? "var(--neon-green)" : "var(--neon-cyan)"
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Pokeball Bottom */}
                        <motion.div
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-card rounded-b-full border-2 border-t-0"
                            animate={{
                                borderColor: isComplete ? "var(--neon-green)" : "var(--neon-cyan)",
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Pokeball Center Line */}
                        <motion.div
                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2"
                            animate={{
                                backgroundColor: isComplete ? "var(--neon-green)" : "var(--neon-cyan)",
                                boxShadow: isComplete
                                    ? "0 0 10px var(--neon-green)"
                                    : "0 0 5px var(--neon-cyan)",
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Pokeball Center Button */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-card rounded-full border-2"
                            animate={{
                                borderColor: isComplete ? "var(--neon-green)" : "var(--neon-cyan)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="absolute inset-1 rounded-full"
                                animate={{
                                    backgroundColor: isComplete
                                        ? "var(--neon-green)"
                                        : "transparent",
                                    boxShadow: isComplete
                                        ? "0 0 10px var(--neon-green)"
                                        : "none",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Particles at 100% */}
                        {isComplete && (
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute top-1/2 left-3 w-1.5 h-1.5 bg-neon-green rounded-full"
                                        initial={{ x: 0, y: 0, opacity: 1, scale: 0}}
                                        animate={{ 
                                            x: Math.cos((i * Math.PI * 2) / 8) * 30,
                                            y: Math.sin((i * Math.PI * 2) / 8) * 30,
                                            opacity: [1, 0],
                                            scale: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatDelay: 1,
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Percentage */}
                    <motion.div
                        className="font-mono"
                        animate={{
                            color: isComplete ? "var(--neon-green)" : "var(--neon-cyan)",
                            scale: isComplete ? [1, 1.3, 1] : 1,
                            textShadow: isComplete
                                ? "0 0 10px var(--neon-green)"
                                : "0 0 5px var(--neon-cyan)",
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {Math.round(scrollProgress)}%
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}