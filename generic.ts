// 제네릭 타입 변수
function logText<T>(text: Array<T>): Array<T> {
  // text를 그냥 T 타입으로 하면 length 속성이 없다는 에러가 뜸. 이 때 Array<T>로 해서 제네릭에 타입을 줄 수 있음
  console.log(text.length);
  return text;
}


// 제네릭 인터페이스
interface GenericLogTextFn {
  <T>(text: T): T;
}
// interface GenericLogTextFn {
//   (text: T): T;
// }

function logText2<T>(text: T): T {
  return text;
}

let myString: GenericLogTextFn = logText2;
// let myString: GenericLogTextFn<string> = logText2;


// 제네릭 클래스
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();


// 제네릭 제약 조건
interface LengthWise {
  length: number;
}

function logText3<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}

logText3('hi');


// 객체의 속성 제약
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}
let obj = {a: 1, b: 2, c: 3};

getProperty(obj, "a");
// getProperty(obj, "z");