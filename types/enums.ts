enum Direction {
  Up,
  Down,
  Left = 3,
  Right,
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

///

enum Res {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Res): void {
  console.log(`recipient is ${recipient}, message is ${message}`);
}

respond('YJ', Res.Yes);

///

enum Enum {
  A,
  B,
  C,
}

let a = Enum.A;
let keyName = Enum[a];
console.log(`a: ${a} , keyName: ${keyName}`);

/////////////////////////////////////////////////////
// gender의 값을 'male', 'female'로만 제한하고 싶다면?

// 방법 1. Enum (열거형) - 연관된 아이템을 묶어서 표현할 수 있는 수단

// 기본적으로 숫자형 이넘. 문자형 이넘으로 변경 가능
enum GenderType {
  Male = 'male',
  Female = 'female',
  GenderNeutral = 'genderNeutral',
}

let student1 = {
  studentId: 121212,
  studentName: 'Jackson',
  age: 30,
  gender: GenderType.Female,
  subject: 'Mongo DB',
  courseCompleted: false,
};

// 방법 2. 리터럴 타입

interface Student2 {
  readonly studentId: number;
  studentName: string;
  age?: number;
  gender: 'male' | 'female' | 'genderNeutral';
  subject: string;
  courseCompleted: boolean;
  addComment?: (comment: string) => string;
}

function getStudentDetails(studentId: number): Student2 {
  return {
    studentId: 123456,
    studentName: 'Mark',
    // age: 20,
    // gender: 'female', // 'string' 형식은 'GenderType' 형식에 할당할 수 없습니다.
    // gender: GenderType.Female,
    gender: 'female',
    subject: 'TypeScript',
    courseCompleted: true,
  };
}
