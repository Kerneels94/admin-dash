interface RoiProperties {
  id: any;
  year: number;
  income: number | string;
}

const roi: RoiProperties[] = [
  {
    id: self.crypto.randomUUID(),
    year: 2018,
    income: 25000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2019,
    income: 250000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2020,
    income: 23000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2021,
    income: 160000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2022,
    income: 140000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2023,
    income: 12000,
  },
  {
    id: self.crypto.randomUUID(),
    year: 2024,
    income: "No data yet",
  },
];

export default roi;
