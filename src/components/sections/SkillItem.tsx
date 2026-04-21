import { type Skill } from '../../types/interfaces';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-gray-700">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
