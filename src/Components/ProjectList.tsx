import Project from "./Project";
import ProjectData from "./data/ProjectData";
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
        <div className="project-list-container w-[100%]  pt-[2vh] bg-[#2C3E50] flex justify-center items-center" >  
            <div className="mt-[10vh] w-[70vw]">
                <h2 className="text-[1.5rem] text-[#A5C8D6]">PROJECTS</h2>
                <div className="project-containers">
                    {projectElements}
                </div>
            </div>
        </div>
    )
}