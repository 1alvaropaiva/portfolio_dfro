import { type Skill } from "../../types/interfaces.ts";
import SkillItem from "./SkillItem";
import SectionCard from "../ui/SectionCard";

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <SectionCard title="Habilidades">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </SectionCard>
    );
};

export default Skills;
