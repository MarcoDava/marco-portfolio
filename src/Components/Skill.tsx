import type { SkillsProps } from "../types/SkillsProps";
import { motion } from "motion/react"

export default function Skills(props: SkillsProps) {
  return (
    <motion.div 
    className="skill-container flex flex-col justify-start items-center mb-[5vh] w-[80px] min-h-[60px]" 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, times: [0, 1] ,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}}
    whileHover={{ scale: 1.1 }}
    
    >
        <a href={props.skillLink}>
            <img
              className="w-[56px] h-[56px] rounded-[12px] object-contain bg-[#0b1216] p-[6px]"
              src={props.image}
              alt={props.skillName}
            />
            <p className="text-[0.8rem] text-[#A5C8D6] text-center mt-2 leading-snug">{props.skillName}</p>
        </a>
    </motion.div>
  )
}
