var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
///
var Res;
(function (Res) {
    Res[Res["No"] = 0] = "No";
    Res[Res["Yes"] = 1] = "Yes";
})(Res || (Res = {}));
function respond(recipient, message) {
    console.log("recipient is ".concat(recipient, ", message is ").concat(message));
}
respond('YJ', Res.Yes);
///
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum[Enum["C"] = 2] = "C";
})(Enum || (Enum = {}));
var a = Enum.A;
var keyName = Enum[a];
console.log("a: ".concat(a, " , keyName: ").concat(keyName));
/////////////////////////////////////////////////////
// gender의 값을 'male', 'female'로만 제한하고 싶다면?
// 방법 1. Enum (열거형) - 연관된 아이템을 묶어서 표현할 수 있는 수단
// 기본적으로 숫자형 이넘. 문자형 이넘으로 변경 가능
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentId: 121212,
    studentName: 'Jackson',
    age: 30,
    gender: GenderType.Female,
    subject: 'Mongo DB',
    courseCompleted: false
};
function getStudentDetails(studentId) {
    return {
        studentId: 123456,
        studentName: 'Mark',
        // age: 20,
        // gender: 'female', // 'string' 형식은 'GenderType' 형식에 할당할 수 없습니다.
        // gender: GenderType.Female,
        gender: 'female',
        subject: 'TypeScript',
        courseCompleted: true
    };
}
