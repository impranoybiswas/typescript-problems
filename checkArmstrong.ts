export function checkArmstrong(number: number) {
  const num = number.toString();
  const len = num.length;
  let sum = num.split("").reduce((a, b) => a + Math.pow(Number(b), len), 0);
  return sum === number;
}
