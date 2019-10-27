function solution(string, limit) {
  return string.length > limit ? string.slice(0, limit) + "..." : string;
}
