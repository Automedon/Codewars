function reverseWords(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
