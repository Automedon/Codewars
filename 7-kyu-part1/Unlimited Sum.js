function sum(...arr) {
  return arr
    .filter(element => {
      if (Number.isInteger(element)) return element;
    })
    .reduce((total, current) => total + current, 0);
}
