function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5); //each loop iteration pulls the next 5 digits into a substring
    if (Number(number) > answer) {
      //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}
