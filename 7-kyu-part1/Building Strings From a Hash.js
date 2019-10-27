function solution(pairs) {
  return Object.keys(pairs)
    .map(function(value) {
      return value + " = " + pairs[value];
    })
    .join(",");
}
