export const academicSemesterTitles: string[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const academicSemesterCodes: string[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterMonths: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSearchableFields: string[] = [
  'title',
  'year',
  'code',
];

export const academicSemesterFilterableFields: string[] = [
  'searchTerm',
  'title',
  'year',
  'code',
];