/*
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [total owed under simple interest, total owed under compound interest].

EXAMPLES:

interest(100,0.1,1) = [110,110]
interest(100,0.1,2) = [120,121]
interest(100,0.1,10) = [200,259]
Round all answers to the nearest integer. Principal will always be an integer between 0 and 9999; interest rate will be a decimal between 0 and 1; number of time periods will be an integer between 0 and 49.

More on Simple interest, compound interest and continuous interest
*/
function interest(P, r, n) {
  return [
    (P * (1 + r * n)).toFixed(0) * 1,
    (P * Math.pow(1 + r, n)).toFixed(0) * 1
  ];
}
