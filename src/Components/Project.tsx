import type { ProjectProps } from "../types/ProjectProps";
import { motion } from "motion/react"

export default function Project(props: ProjectProps) {
  return (
    <motion.div 
    className="project-container h-[50vh] w-[60vw]" 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, times: [0, 1] ,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}
    >
        <a href={props.projectLink}>
            <img className="project-image" src={props.image} alt="project-pic" />
            <h3 className="project-title">{props.projectTitle}</h3>
            <p className="project-summary">{props.projectDescription}</p>
            <span className="project-link">View Project</span>
        </a>
    </motion.div>
  )
}
