const cubeOdd = arr => {
  const areNumbers = arr.every(element => typeof element === "number");
  if (!areNumbers) return undefined;

  return arr
    .map(number => number ** 3)
    .filter(number => number % 2 !== 0)
    .reduce((total, value) => total + value, 0);
};
