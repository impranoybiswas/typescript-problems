export const allCherecters = () => {
  // Define character sets
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";
  const all = uppercase + lowercase + numbers + symbols;
  return {
    uppercase,
    lowercase,
    numbers,
    symbols,
    all,
  };
};
