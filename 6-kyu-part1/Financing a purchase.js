/*
Description:
The description is rather long but it tries to explain what a financing plan is.

The fixed monthly payment for a fixed rate mortgage is the amount paid by the borrower every month that ensures that the loan is paid off in full with interest at the end of its term.

The monthly payment formula is based on the annuity formula. The monthly payment c depends upon:

rate - the monthly interest rate is expressed as a decimal, not a percentage. The monthly rate is simply the given yearly percentage rate divided by 100 and then by 12.

term - the number of monthly payments, called the loan's term.

principal - the amount borrowed, known as the loan's principal (or balance).

First we have to determine c.

We have: c = n /d with n = r * balance and d = 1 - (1 + r)**(-term) where ** is the power function (you can look at the reference below).
The payment c is composed of two parts. The first part pays the interest (let us call it int) due for the balance of the given month, the second part repays the balance (let us call this part princ) hence for the following month we get a new balance = old balance - princ with c = int + princ.

Loans are structured so that the amount of principal returned to the borrower starts out small and increases with each mortgage payment. While the mortgage payments in the first years consist primarily of interest payments, the payments in the final years consist primarily of principal repayment.

A mortgage's amortization schedule provides a detailed look at precisely what portion of each mortgage payment is dedicated to each component.

In an example of a $100,000, 30-year mortgage with a rate of 6 percents the amortization schedule consists of 360 monthly payments. The partial amortization schedule below shows with 2 decimal floats the balance between principal and interest payments.

--	num_payment	c	princ	int	Balance
--	1	599.55	99.55	500.00	99900.45
--	...	599.55	...	...	...
--	12	599.55	105.16	494.39	98,771.99
--	...	599.55	...	...	...
--	360	599.55	596.57	2.98	0.00
Task:
Given parameters

rate: annual rate as percent (don't forgent to divide by 100*12)
bal: original balance (borrowed amount) 
term: number of monthly payments
num_payment: rank of considered month (from 1 to term)
the function amort will return a formatted string:

"num_payment %d c %.0f princ %.0f int %.0f balance %.0f" (with arguments num_payment, c, princ, int, balance)

Examples:
amort(6, 100000, 360, 1) ->
"num_payment 1 c 600 princ 100 int 500 balance 99900"

amort(6, 100000, 360, 12) ->
"num_payment 12 c 600 princ 105 int 494 balance 98772"
Ref
https://en.wikipedia.org/wiki/Mortgage_calculator
*/

function amort(r, b, t, n) {
  r /= 1200;
  var c = (r * b) / (1 - (1 + r) ** -t);
  for (let m = 1; m < n; m++) b -= c - r * b;
  return `num_payment ${n.toFixed(0)} c ${c.toFixed(0)} princ ${(
    c -
    r * b
  ).toFixed(0)} int ${(r * b).toFixed(0)} balance ${(b - (c - r * b)).toFixed(
    0
  )}`;
}
