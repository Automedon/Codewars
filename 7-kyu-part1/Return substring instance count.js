function solution(fullText, searchText) {
  return (fullText.match(new RegExp(searchText, "g")) || []).length;
}
