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
                <motion.div>

                    {/* XP LABEL */}
                    <motion.div>
                        XP
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}