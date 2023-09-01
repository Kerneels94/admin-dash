interface ISkill {
  id: any;
  langaugeUsed: {};
  frameworkUsed: {};
}

export const skills: ISkill[] = [
  {
    id: self.crypto.randomUUID(),
    langaugeUsed: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworkUsed: ["React", "Node", "Express", "Next", "Gatsby"],
  },
];
