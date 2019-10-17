function shorter_reverse_longer(a, b) {
  if (a.length > b.length) {
    return `${b}${a
      .split("")
      .reverse()
      .join("")}${b}`;
  }
  if (a.length < b.length) {
    return `${a}${b
      .split("")
      .reverse()
      .join("")}${a}`;
  }
  return `${b}${a
    .split("")
    .reverse()
    .join("")}${b}`;
}
