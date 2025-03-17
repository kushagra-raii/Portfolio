import SkillCard from "./SkillCard";
import skills from "../../../../public/data/skillsData";

const SkillSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-gray-300 border-b border-slate-600 py-6 px-4 backdrop-blur-lg w-3/4 lg:w-1/2 mx-auto">
      <h2 className="font-mono text-lg self-start text-gray-Light">
        Active Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} img={skill.img} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
