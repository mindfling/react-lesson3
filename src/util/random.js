// * utils for random number generator *

export const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min + 0.5) + min + 0.5);
};

export const randomFloor = (min, max) => {
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  return res;
};

export const randomCeil = (min, max) => {
  const res = Math.ceil(Math.random() * (max - min + 1)) + (min - 1);
  return res;
};
