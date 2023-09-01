interface Project {
  id: any;
  name: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: self.crypto.randomUUID(),
    name: "Reports",
    description:
      "A reporting system built for the security industry that enables them to create reports for incidents and OB entries",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind Css"],
  },
  {
    id: self.crypto.randomUUID(),
    name: "F1 App",
    description:
      "A SPA application that displays the season winners in first place from 2005",
    technologies: ["React", "TypeScript", "Tailwind Css"],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Inpulsa",
    description: "A 7 page website built with Html, Css and JavaScript",
    technologies: ["React", "TypeScript", "Tailwind Css"],
  },
  {
    id: self.crypto.randomUUID(),
    name: "inpulsa Guarding",
    description:
      "With a decades experience in the security industry, Inpulsa Guarding is a security company that provides security services to the private and public sector",
    technologies: ["Html", "Tailwind Css", "JavaScript"],
  },
];
