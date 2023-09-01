interface ProjectProperties {
  id: any;
  name: string;
  description: string;
  technologies: string[];
}

const currentProject: ProjectProperties[] = [
  {
    id: self.crypto.randomUUID(),
    name: "Admin Dash",
    description:
      "A dashboard created to orginize some of your life and build sometthing that you want to build instead of doing something that they don't want to do",
    technologies: ["React Js", "Tailwind Css", "Any component Library"],
  },
];

export default currentProject;
