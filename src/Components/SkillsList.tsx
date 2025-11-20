import Skills from "./Skill";
import SkillsData from "./data/SkillsData";
import type { SkillsProps } from "../types/SkillsProps";


export default function SkillsList() {


        // Filter products by category
    const languageSkills = SkillsData.filter(language => language.skillType === "languages").map((skill: SkillsProps) => {
        return <Skills
            id = {skill.id}
            skillType={skill.skillType}
            skillLink={skill.skillLink}
            image={skill.image}
            skillName={skill.skillName}
        />
    });

    const frameworkSkills = SkillsData.filter(language => language.skillType === "frameworks").map((skill: SkillsProps) => {
        return <Skills
            id = {skill.id}
            skillType={skill.skillType}
            skillLink={skill.skillLink}
            image={skill.image}
            skillName={skill.skillName}
        />
    });

    const librarySkills = SkillsData.filter(language => language.skillType === "libraries").map((skill: SkillsProps) => {
        return <Skills
            id = {skill.id}
            skillType={skill.skillType}
            skillLink={skill.skillLink}
            image={skill.image}
            skillName={skill.skillName}
        />
    });

    const toolSkills = SkillsData.filter(language => language.skillType === "tools").map((skill: SkillsProps) => {
        return <Skills
            id = {skill.id}
            skillType={skill.skillType}
            skillLink={skill.skillLink}
            image={skill.image}
            skillName={skill.skillName}
        />
    });

    const databaseSkills = SkillsData.filter(language => language.skillType === "databases").map((skill: SkillsProps) => {
        return <Skills
            id = {skill.id}
            skillType={skill.skillType}
            skillLink={skill.skillLink}
            image={skill.image}
            skillName={skill.skillName}
        />
    });
    return(
        <div className="w-[100%]  pt-[2vh] bg-[#1b2631] flex justify-center items-center flex-col" >  
            <div className="w-[70vw] flex justify-start items-center flex-col">
                <h2 className="text-[1.5rem] text-[#A5C8D6]">LANGUAGES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {languageSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6]">FRAMEWORKS</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {frameworkSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6]">LIBRARIES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {librarySkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6]">TOOLS</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {toolSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6]">DATABASES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {databaseSkills}
                </div>
            </div>
        </div>
    )
}