import { allCherecters } from "./allCheracters.ts";

export function generateSecretKey() {
  const { all } = allCherecters();
  let key = "";

  for (let i=0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * all.length);
    key += all[randomIndex];
  }

  return key;
}
