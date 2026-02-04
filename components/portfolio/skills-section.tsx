"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SKILLS } from "@/lib/portfolio-data"
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiDjango, 
  SiHtml5, 
  SiCss3, 
  SiRoblox 
} from "react-icons/si";

// Skill Icons SVG
const SkillIcon = ({ name }: { name: string }) => {
  const iconClass = "w-10 h-10";
  
  // Normaliza o nome para minúsculo para evitar erros de case-sensitive
  const normalizedName = name.toLowerCase();

  switch (normalizedName) {
    case "python":
      return <SiPython className={iconClass} color="#3776AB" />;
      
    case "javascript":
      return <SiJavascript className={iconClass} color="#F7DF1E" />;
      
    case "react":
      return <SiReact className={iconClass} color="#61DAFB" />;
      
    case "nodejs":
      return <SiNodedotjs className={iconClass} color="#339933" />;
      
    case "mongodb":
      return <SiMongodb className={iconClass} color="#47A248" />;
      
    case "django":
      return <SiDjango className={iconClass} color="#092E20" />;
      
    case "html":
      return <SiHtml5 className={iconClass} color="#E34F26" />;
      
    case "css":
      return <SiCss3 className={iconClass} color="#1572B6" />;
      
    case "luau":
    case "roblox":
      return <SiRoblox className={iconClass} color="#000000" />; // Ou use a cor da sua preferência
      
    default:
      return (
        <div className="w-10 h-10 bg-cyan-400 rounded flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0).toUpperCase()}
        </div>
      );
  }
}

export function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div>
                    <h2>
                        {"// STACK DE SKILLS"}
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}
