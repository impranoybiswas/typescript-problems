export function checkMobileNumber(mobile: string) {
  if (mobile.match(/^\+8801[0-9]{9}$/)) return true;
  return false;
}
