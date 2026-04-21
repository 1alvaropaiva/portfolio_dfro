import type {PortfolioProps} from "../types/interfaces.ts";

export const portfolioProps: PortfolioProps = {
  name: "Alvaro Paiva",
  title: "Desenvolvedor Frontend",
  website: "https://portfolio-dfro.vercel.app/",
  github: "https://github.com/1alvaropaiva",
  mail: "alvaro.soares.242ads@aluno.faeterj-prc.faetec.rj.gov.br",
  about: {
    fullName: "Alvaro Paiva Soares",
    description: "Desenvolvedor frontend apaixonado por tecnologia e desenvolvimento web, com sólida experiência na criação de interfaces responsivas etc",
    interestArea: "Frontend, UX/UI Design, Web Development",
    city: "Nilópolis",
    state: "Rio de Janeiro",
    age: 25
  },
  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 91 },
    { name: "JavaScript", level: 92 },
    { name: "React", level: 93 },
    { name: "Tailwind CSS", level: 94 },
    { name: "TypeScript", level: 95 }
  ],  projects: [
    {
      name: "Este currículo",
      description: "Um portfólio construído para exibir projetos e habilidades na matéria Desenvolvimento Frontend.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      link: "https://portfolio-dfro.vercel.app/"
    },
    {
      name: "Gerador de Planos de Aula",
      description: "Aplicação para gerenciamento e criação de planos de aula personalizados.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      link: "https://lessonplans.vercel.app/"
    },
    {
      name: "Ana Júlia - 1 ano",
      description: "Convite de aniversário em landing page, com fácil comunicação com o responsável.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      link: "https://anajulia-niver.vercel.app/"
    }
  ]
};
