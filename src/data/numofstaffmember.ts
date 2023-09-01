interface StaffProperties {
  id: any;
  number: number;
}

const numberOfStaff: StaffProperties[] = [
  {
    id: self.crypto.randomUUID(),
    number: 25,
  },
];

export default numberOfStaff;
