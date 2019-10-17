function candies(kids) {
  if (kids.length <= 1) return -1;
  const maxCandies = Math.max(...kids);

  return kids.reduce((total, kid) => total + maxCandies - kid, 0);
}
