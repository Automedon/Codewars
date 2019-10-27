function solution(str, ending) {
  return new RegExp(ending + "$", "i").test(str);
}
