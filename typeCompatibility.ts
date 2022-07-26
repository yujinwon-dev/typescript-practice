// Enum 타입 호환

enum Status {Ready, Waiting};
enum Color {Red, Blue, Green};

let stat = Status.Ready;
// stat = Color.Green;
stat = 1;


// Class 타입 호환
class Hulk {
  handSize: number;
  age: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  handSize: number;
  constructor(numHand: number) {}
}

let h: Hulk;
let c: Captain;

// h = c;
// c = h;


// Generic 타입 호환
interface Empty<T> {}
let y: Empty<number>;
let z: Empty<string>;
// y = z;

interface NotEmpty<T> {
  data: T;
}
let v: NotEmpty<number>;
let w: NotEmpty<string>;

// v = w;