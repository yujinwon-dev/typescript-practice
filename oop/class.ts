class Employee {
  private fullName = '';
  jobTitle = '';
  hourlyRate = 0.0;
  workingHoursPerWeek = 0;

  constructor(
    fullName: string,
    jobTitle: string,
    hourlyRate: number,
    workingHoursPerWeek: number
  ) {
    this.fullName = fullName;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRate;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }

  printEmployeeDetails = (): void => {
    // 클래스 안에서 정의된 함수(메서드)들은 클래스 내에 정의된 변수(프로퍼티)들에 접근 가능
    console.log(
      `${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${
        this.hourlyRate * this.workingHoursPerWeek
      } 달러 이다.`
    );
  };
}

let employee1 = new Employee('유진', '주니어 웹 개발자', 40, 35);
employee1.fullName = '민수';
employee1.printEmployeeDetails();
