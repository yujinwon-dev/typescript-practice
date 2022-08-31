// interface
// 시작은 대문자로
// 앞에 i를 붙이지 않음 ex. iStudent
// 인터페이스를 타입으로 갖는 값은 인터페이스의 구조를 그 값으로 갖도록 강제됨
interface Student {
  // readonly property
  readonly studentId: number;
  studentName: string;
  age?: number; // optional property
  gender: string;
  subject: string;
  courseCompleted: boolean;
  // 메소드 정의하는 2가지 방법
  // addComment(comment: string): string;
  addComment?: (comment: string) => string;
}

function getStudentDetail(studentId: number): Student {
  return {
    studentId: 123456,
    studentName: 'Mark',
    // age: 20,
    gender: 'female',
    subject: 'TypeScript',
    courseCompleted: true,
  };
}

function saveStudentDetail(student: Student): void {
  // student.studentId = 121212; // 읽기 전용 속성이므로 'studentId'에 할당할 수 없습니다.
}

saveStudentDetail({
  studentId: 123456,
  studentName: 'Janet',
  gender: 'female',
  subject: 'Node JS',
  courseCompleted: true,
});
