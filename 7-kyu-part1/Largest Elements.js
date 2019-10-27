function largest(n, xs) {
  return xs.sort((a, b) => a - b).slice(xs.length - n);
}
