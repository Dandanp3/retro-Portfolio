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
      return <SiRoblox className={iconClass} color="#1ad1ff" />; 
      
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0} : {}}
                >
                    <h2 className="text-2xl md:text-3xl font-pixel text-neon-green mb-4">
                        {"// STACK DE SKILLS"}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto"/>
                </motion.div>

                {/* Skills Grid */}
                <motion.div>
                  {SKILLS.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-lg opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"
                        animate={hoveredSkill === skill.name ? { opacity: 0.5} : { opacity: 0 }}
                      />

                      {/* CARD */}
                      <motion.div>
                        {/* Icon */}
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <SkillIcon name={skill.icon} />
                        </div>

                        {/* Name */}
                        <span>
                          {skill.name}
                        </span>

                        {/* Level Bar */}
                        <div>
                          <motion.div
                          
                          />
                        </div>

                        {/* Level Text */}
                        <span>
                          LVL {skill.level}
                        </span>

                        {/* Tooltip */}
                        <motion.div>
                          {skill.description}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
            </div>
        </section>
    )
}
