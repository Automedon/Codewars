const gps = (s, x) => {
  if (x.length <= 1) {
    return 0;
  }

  let output = [];
  for (let i = 0; i < x.length - 1; i++) {
    output.push(((x[i + 1] - x[i]) * 3600) / s);
  }

  return Math.max(...output);
};
