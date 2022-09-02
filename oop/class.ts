// 길고 반복되는 매개변수
class Employee {
  constructor(
    private _fullName: string,
    private _jobTitle: string,
    private _hourlyRate: number,
    public workingHoursPerWeek: number
  ) {}

  get fullName() {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
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
console.log(employee1.fullName);
employee1.fullName = '민수';
employee1.printEmployeeDetails();
