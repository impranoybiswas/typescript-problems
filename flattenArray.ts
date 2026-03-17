export function flattenArray(arr: any[]) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}