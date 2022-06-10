// function sum(a: number, b: number): number {
//   return a + b;
// }
function sum(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var total = 0;
    console.log(nums);
    for (var key in nums) {
        total += nums[key];
    }
    return a + total;
}
// function sum(a: number, b = 100): number {
//   return a + b;
// }
console.log(sum(10, 20, 30, 40));
