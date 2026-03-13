export function rightTriangle(n: number = 5, s: string = "*") {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += s.repeat(i) + "\n";
  }

  return result;
}

export function pyramid(n: number = 5, s: string = "*") {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let padding = " ".repeat(n - i);
    let stars = s.repeat(2 * i - 1);
    result += padding + stars + padding + "\n";
  }

  return result;
}
