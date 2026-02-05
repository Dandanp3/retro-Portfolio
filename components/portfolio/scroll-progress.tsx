"useclient"

import { motion, AnimatePresence} from "framer-motion"
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
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}