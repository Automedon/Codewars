/*
Description:
Calculate the monthly mortgage payment given the principal loan amount P0, the amortization period a and the yearly interest percentage i.

Use this formula:

c = r * P0/1 - (1 + r)-N

N can be found by multiplying the number of payments each year by the amortization period
r can be found by dividing the yearly interest rate by the number of payments each year (remember i is a percentage but r should be a decimal)
Since we're talking money, your answer should be rounded to 2 decimal places.

Below is an example for weekly payments (52wks/year):

P0 = $400000

a = 25 years

i = 3.5%

r = i / 52 / 100

N = a * 52

c = $461.79
*/
function calculatePayment(p0, amortization, interestRate) {
  const r = (interestRate/12)/100
  return (r*p0/(1-Math.pow(1+r,-(amortization*12)))).toFixed(2)*1
}
