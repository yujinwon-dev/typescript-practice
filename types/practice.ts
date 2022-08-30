/////////// 배열 ///////////
let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// week1.push(1);  // error


/////////// 튜플 ///////////
let b: [string, number];
b = ['z', 1];

b[0].toLowerCase();
// b[1].toLowercase();  // error


/////////// void, never ///////////
function sayHello(): void {
  console.log('hello');
}

// never: 항상 에러 반환하거나 영원히 반복
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}