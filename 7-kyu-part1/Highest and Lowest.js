function highAndLow(numbers){
let nums = numbers.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
