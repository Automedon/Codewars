function getMissingElement(superImportantArray) {
  let count = 0;
  let arr = superImportantArray.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (i == arr[i]) count++;
  }
  return count;
}
