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
        <div id="skills-section" className="mt-[4vh] w-[100%]  pt-[2vh] bg-[#1b2631] flex justify-center items-center flex-col " >  

            <h2 className="aboutme-header">PROOF OF WORK:</h2>
      <p className="mb-[2vh]">My Contribution Chart at <a href="https://github.com/MarcoDava">my Github</a>. Its not just a claim, <span className="text-[#A5CBD6]">its real.</span></p>
      <img id="actual3" className="gh-chart mb-[5vh]" src="https://ghchart.rshah.org/C26E00/MarcoDava.svg"/>
            <div className="w-[70vw] flex justify-start items-center flex-col">
                <h2 className="text-[1.5rem] text-[#A5C8D6] mb-[5vh]">LANGUAGES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {languageSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6] mb-[5vh]">FRAMEWORKS</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {frameworkSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6] mb-[5vh]">LIBRARIES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {librarySkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6] mb-[5vh]">TOOLS</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {toolSkills}
                </div>
                <h2 className="text-[1.5rem] text-[#A5C8D6] mb-[5vh]">DATABASES</h2>
                <div className="w-[100%] m-[2vh] flex justify-start gap-[8vh] items-center flex-row flex-wrap">
                    {databaseSkills}
                </div>
                <div className="h-[20vh] bg-gradient-to-t from-[#2C3E50] to-[#1B2631]"></div>
            </div>
        </div>
    )
}