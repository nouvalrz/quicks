export const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const pickRandomBySeed = <T>(arr: T[], seed: string): T => {
  const hash = hashString(seed);
  const index = hash % arr.length;
  return arr[index];
};
