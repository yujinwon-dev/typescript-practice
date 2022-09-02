var Employee = /** @class */ (function () {
    function Employee(fullName, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.fullName = '';
        this.jobTitle = '';
        this.hourlyRate = 0.0;
        this.workingHoursPerWeek = 0;
        this.printEmployeeDetails = function () {
            // 클래스 안에서 정의된 함수(메서드)들은 클래스 내에 정의된 변수(프로퍼티)들에 접근 가능
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
        this.fullName = fullName;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    return Employee;
}());
var employee1 = new Employee('유진', '주니어 웹 개발자', 40, 35);
employee1.fullName = '민수';
employee1.printEmployeeDetails();
