/*
Description:
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!
*/

function  calculateAge(a,b) {
  if (a>b&&+a-b==1)return `You will be born in ${+a-b} year.`
  else if (a<b&&+b-a==1)return `You are ${b-a} year old.`
  else if (a>b)return `You will be born in ${+a-b} years.`
  else if (a<b) return `You are ${b-a} years old.`
  return 'You were born this very year!'
}
