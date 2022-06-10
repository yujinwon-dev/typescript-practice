// function sum(a: number, b: number): number {
//   return a + b;
// }

function sum(a: number, ...nums: number[]): number {
  let total = 0;
  console.log(nums);  // [20, 30, 40]
  for (let key in nums) {
    total += nums[key];
  }
  return a + total;
}

// function sum(a: number, b = 100): number {
//   return a + b;
// }

console.log(sum(10, 20, 30, 40));
