interface Salary {
  id: any;
  name: string;
  profession: string;
  salarie: number;
}

const salaries: Salary[] = [
  {
    id: self.crypto.randomUUID(),
    name: "Corrie",
    profession: "Software Enigeer",
    salarie: 25000,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Paul",
    profession: "Self-employed",
    salarie: 25000,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Paul Jnr",
    profession: "Self-employed",
    salarie: 25000,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Linda",
    profession: "Teacher",
    salarie: 6000,
  },
  {
    id: self.crypto.randomUUID(),
    name: "Elizabeth",
    profession: "Admin Clerk",
    salarie: 7800,
  },
];

export default salaries;
