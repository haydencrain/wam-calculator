import SubjectResult from "./SubjectResult";

export const convertTable = (tableString: string): SubjectResult[] => {
  const rows = tableString.split('\n');
  if (rows[0].includes('Year'))
    rows.shift();
  
  const subjectResults: SubjectResult[] = rows.map(row => {
    const columns = row.split('\t');
    return {
      year: Number(columns[0]),
      session: columns[1],
      subjectId: Number(columns[2]),
      title: columns[3],
      ver: Number(columns[4]),
      mark: Number(columns[5]),
      grade: columns[6],
      creditPoints: Number(columns[7])
    }
  });
  return subjectResults;
};

export const calculateWam = (subjectResults: SubjectResult[]): number => {
  let cpTotal = 0;
  const total = subjectResults
    .map(result => {
      cpTotal += result.creditPoints;
      return result.mark * result.creditPoints;
    })
    .reduce((total, next) => total + next);

  return round1Decimal(total / cpTotal);
}

export const round1Decimal = (num: number): number => {
  return Math.round((num + 0.00001) * 10) / 10;
};

