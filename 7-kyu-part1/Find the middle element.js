var gimme = function(inputArray) {
  return [...inputArray].indexOf(inputArray.sort((a, b) => a - b)[1]);
};
