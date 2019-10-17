/*
Description:
Linear Regression of Y on X
sample linear regression, curtesy of wikipedia
*A sample regression line on a given set of points- source: wikimedia*A linear regression line has an equation in the form **Y = a + bX**, where X is the explanatory variable and Y is the dependent variable. The parameter b represents the *slope* of the line, while a is called the *intercept* (the value of y when x = 0).
For more details visit the related wikipedia page.

The function that you have to write accepts two arguments, both in the form of a list/array, x and y, both representing the coordinates of the points to regress (so that, for example, the first point has coordinates (x[0], y[0]).

Your function should return a tuple (in Python) or an array (any other language) of two elements: a (intercept) and b (slope) in this order.

You must round your result to the first 4 decimal digits

Examples:

regression_line([25,30,35,40,45,50], [78,70,65,58,48,42]) === [114.381, -1.4457]

regressionLine([56,42,72,36,63,47,55,49,38,42,68,60], [147,125,160,118,149,128,150,145,115,140,152,155]) === [80.7777, 1.138]
Formula Hint

Σ stands for Sigma or Summation

a =  [(Σx²)(Σy) - (Σx)(Σxy)]  /  [n(Σx²) - (Σx)²]

b =  [n(Σxy) - (Σx)(Σy)] / [n(Σx²) - (Σx)²]
*/
function regression_line(x,y){
  const n = x.length;
  let sum_x = 0
  let sum_y = 0
  let sum_x_sq = 0
  let sum_xy = 0
  for (let i=0;i<n;i++){
        sum_x += x[i]
        sum_y += y[i]
        sum_x_sq += x[i]**2
        sum_xy += x[i] * y[i]
  }
    const a = (((sum_x_sq * sum_y) - (sum_x * sum_xy)) / ((n * sum_x_sq) - sum_x**2)).toFixed(4)*1
    const b = (((n * sum_xy) - (sum_x * sum_y)) / ((n * sum_x_sq) - sum_x**2)).toFixed(4)*1
  return [a,b]
}
