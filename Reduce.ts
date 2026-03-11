const arr = [1, 4, 5, 6, 7, 3];

function sumArr(nums: number[]) {
  const result = nums.reduce((acc, curr) => acc + curr);
  return result;
}

function sumManual(nums: number[]) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

console.log(sumManual(arr));
