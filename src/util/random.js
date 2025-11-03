// * utils for random number generator *

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomNumMinimax = (min, max) => {
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`rand [${min}, ${max}] res: ${res}`);
  return res;
};
