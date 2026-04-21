import { type Project } from '../../types/interfaces';
import ProjectCard from './ProjectCard';
import SectionCard from '../ui/SectionCard';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <SectionCard title="Projetos">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
