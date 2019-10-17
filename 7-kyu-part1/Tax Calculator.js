/*
Description:
Write a function to calculate compound tax using the following table:
For $10 and under, the tax rate should be 10%.
For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
Tack on an additional 3% for the portion of the total above $30.
Return 0 for invalid input(anything that's not a positive real number).
Examples:
An input of 10, should return 1 (1 is 10% of 10)
An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
* Note that the returned value should be rounded to the nearest penny.
*/
function taxCalculator(total) {
  let tax=0;
  if(total <= 0 || isNaN(total)){
    return 0
  }
  else if(total > 0 && total <= 10){
    tax = total * 0.1;
  }
  else if(total > 10 && total <= 20){
    tax = 1 + (total - 10) * 0.07;
  }
  else if(total > 20 && total <= 30){
    tax = 1.7 + (total - 20) * 0.05;
  }
  else {
    tax = 2.2 + (total - 30) * 0.03;
  }
  return +tax.toFixed(2);  
}
