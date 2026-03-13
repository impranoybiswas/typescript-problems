// Remove Duplicate Number or String
export function removeDuplicate(arr: number[] | string[]) {
  if (typeof arr[0] === "string") return Array.from(new Set(arr as string[]));
  return Array.from(new Set(arr as number[]));
}
