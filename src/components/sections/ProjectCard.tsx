import { type Project } from '../../types/interfaces';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-shadow bg-white">
      <a 
        href={project.link || '#'} 
        target={project.link ? "_blank" : "_self"} 
        rel="noopener noreferrer" 
        className={`${project.link ? 'hover:underline text-primary' : 'text-gray-800 cursor-default'} block mb-2`}
      >
        <h3 className="text-xl font-semibold">{project.name}</h3>
      </a>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, tIndex) => (
          <span 
            key={tIndex} 
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
