import type { ProjectProps } from "../types/ProjectProps";
import { motion } from "motion/react"

export default function Project(props: ProjectProps) {
  return (
    <motion.div 
    className="project-container w-full sm:w-[340px] md:w-[360px]" 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 1.2, times: [0, 1] ,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}
    >
        <a href={props.projectLink} className="flex flex-col justify-start items-center p-[1vh] gap-[1vh] h-full">
            <img className="project-image w-full rounded-[3vh] object-cover" src={props.image} alt="project-pic" />
            <h3 className="project-title">{props.projectTitle}</h3>
            <p className="project-summary">{props.projectDescription}</p>
            <span className="project-link">View Project</span>
        </a>
    </motion.div>
  )
}
