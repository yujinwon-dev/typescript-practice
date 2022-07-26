enum Direction {
  Up,
  Down,
  Left = 3,
  Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

///

enum Res {
	No = 0,
	Yes = 1
}

function respond(recipient: string, message: Res): void {
	console.log(`recipient is ${recipient}, message is ${message}`);
}

respond('YJ', Res.Yes);

///

enum Enum {
  A, B, C
}

let a = Enum.A;
let keyName = Enum[a];
console.log(`a: ${a} , keyName: ${keyName}`);