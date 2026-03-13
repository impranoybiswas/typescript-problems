export function reverseWord(str: string) {
  const arr = str.split("");
  const reversed = arr.reverse();
  const result = reversed.join("");
  return result;
}

export function reverseSentance(str: string) {
  const arr = str.split(" ");
  const reversed = arr.reverse();
  const result = reversed.join(" ");
  return result;
}
