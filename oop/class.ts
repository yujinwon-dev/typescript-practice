class Employee {
  fullName = '';
  jobTitle = '';
  hourlyRate = 0.0;
  workingHoursPerWeek = 0;

  printEmployeeDetails = (): void => {
    // 클래스 안에서 정의된 함수(메서드)들은 클래스 내에 정의된 변수(프로퍼티)들에 접근 가능
    console.log(
      `${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${
        this.hourlyRate * this.workingHoursPerWeek
      } 달러 이다.`
    );
  };
}

// 객체의 프로퍼티마다 각각 초기값을 넣어주는 방식
// 코드가 복잡하고 가독성이 좋지 않음
// 이때 사용할 수 있는 것이 생성자(Constructor)

let employee1 = new Employee();
employee1.fullName = '유진';
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
