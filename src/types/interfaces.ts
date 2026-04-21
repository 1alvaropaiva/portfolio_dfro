export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface PortfolioProps {
  name: string;
  title: string;
  website: string;
  github: string;
  mail: string;
  about: {
    fullName: string;
    age: number;
    city: string;
    state: string;
    description: string;
    interestArea: string;
  };
  skills: Skill[];
  projects: Project[];
}
