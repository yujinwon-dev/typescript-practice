interface Person {
  name: string;
  age: number;
}

interface Dev {
  name: string;
  skill: string;
}

function introduce(someone: Person | Dev) {
  someone.name; // O 정상 동작
  // someone.age; // X 타입 오류
  // someone.skill; // X 타입 오류
  if ('age' in someone) {
    someone.age;
  } else {
    someone.skill;
  }
}
