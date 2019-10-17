function swap(str) {
  return str
    .split("")
    .map(el => {
      if (el.toUpperCase() == el) return el.toLowerCase();
      if (el.toLowerCase() == el) return el.toUpperCase();
    })
    .join("");
}
