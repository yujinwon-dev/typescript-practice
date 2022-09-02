var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.fullName = '';
        this.jobTitle = '';
        this.hourlyRate = 0.0;
        this.workingHoursPerWeek = 0;
        this.printEmployeeDetails = function () {
            // 클래스 안에서 정의된 함수(메서드)들은 클래스 내에 정의된 변수(프로퍼티)들에 접근 가능
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
    }
    return Employee;
}());
// 객체의 프로퍼티마다 각각 초기값을 넣어주는 방식
// 코드가 복잡하고 가독성이 좋지 않음
// 이때 사용할 수 있는 것이 생성자(Constructor)
var employee1 = new Employee();
employee1.fullName = '유진';
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
