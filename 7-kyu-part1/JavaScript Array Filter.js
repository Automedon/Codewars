function getEvenNumbers(numbersArray) {
  return numbersArray.filter(value => {
    if (value % 2 == 0) return value;
  });
}
