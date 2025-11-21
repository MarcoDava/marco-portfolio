import type { SkillsProps } from "../types/SkillsProps";
import { motion } from "motion/react"

export default function Project(props: SkillsProps) {
  return (
    <motion.div 
    className="h-[3vh] w-[3vw] skill-container flex flex-col justify-center items-center mb-[5vh]" 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, times: [0, 1] ,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}}
    whileHover={{ scale: 1.1 }}
    
    >
        <a href={props.skillLink}>
            <img className="w-[7vh] h-[7vh] rounded-[1.5vh] " src={props.image} alt="skill-pic" />
            <p className="text-[1rem] text-[#A5C8D6]">{props.skillName}</p>
        </a>
    </motion.div>
  )
}
