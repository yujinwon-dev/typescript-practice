let fullName: string;
let jobTitle: string;
let hourlyRate: number;
let workingHoursPerWeek: number;

let printEmployeeDetails = (
  fullName: string,
  jobTitle: string,
  hourlyRate: number,
  workingHoursPerWeek: number
): void => {
  console.log(
    `${fullName}의 직업은 ${jobTitle}이고 일주일의 수입은 ${
      hourlyRate * workingHoursPerWeek
    } 달러 이다.`
  );
};
