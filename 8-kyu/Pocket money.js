/*
Every week Johnny gets pocket money. At the end of each week, Johnny adds up his pocket money, if the total for the week is an even number his parents will match this. If the total number is odd, he doesn't get additional money (poor Johnny).

For example, at the end of one week, Johnny counted $10, so he was given another $10, taking the total to $20. At the end of another week, he counted $3, so he was given nothing and total pocket money for the week is $3.

Write a function that will tell us how much money Johnny will have at the end of each week depending on whether the total is even or odd.
*/
function pocketMoney(number) {
  return number % 2 === 0 ? number * 2 : number;
}
