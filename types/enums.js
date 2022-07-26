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
