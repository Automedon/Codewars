/*
Can you create a function that takes a persons yearly salary as an argument and returns the tax they pay per annum using the tax rates below.

The way in which tax is paid follows the following progressive pattern, let us take £200,000 as an example, in this case you get the first £11,500 tax free, any earnings over £11,500 up to £45,000 are taxed at 20%, then any earnings over £45,000 up to £150,000 are taxed at 40%, then all earnings over £150,000 are taxed at 45%. In otherwords, you always start from the bottom bracket (tax free income) and work your way through the brackets.

Use the following tax rates for reference:

First £11,500 is tax free.

Over £11,500 up to £45,000 is taxed at 20%.

Over £45,000 up to £150,000 is taxed at 40%.

Anything over £150,000 is taxed at 45%.

Return the result as a string, for example if the result was 5000, then return "You should pay £5000 in tax", except in the case when you get a result where you pay no tax, in which case return "You should pay no tax".
*/
function howMuchTax(salary) {
  salary-=11500
  let tax = 0
  if (salary<=0) return 'You should pay no tax'
  if (salary>=33500){
    salary-=33500
    tax+=6700
  } else { return `You should pay £${salary*0.2} in tax`}
  if (salary>=105000){
    salary-=105000
    tax+=42000
  } else { return `You should pay £${salary*0.4+6700} in tax`}
  return `You should pay £${salary*0.45+tax} in tax`
}
