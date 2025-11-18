import Project from "./Project";
import ProjectData from "./ProjectData";
import type { ProjectProps } from "../types/ProjectProps";


export default function ProjectList() {

     const projectElements = ProjectData.map((project: ProjectProps) => {
        return <Project
            id = {project.id}
            projectLink={project.projectLink}
            image={project.image}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
        />
    })
    return(
        <div className="project-list-container">  
           <h2>PROJECTS</h2>
            <div className="project-containers">
                {projectElements}
            </div>
        </div>
    )
}