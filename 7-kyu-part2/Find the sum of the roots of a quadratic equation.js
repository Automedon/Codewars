/*
Description:
Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

Quadratic equation - https://en.wikipedia.org/wiki/Quadratic_equation
*/
function roots(a,b,c){
  let x = (b+Math.sqrt(b*b-4*a*c))/2*a
  let x2 = (b-Math.sqrt(b*b-4*a*c))/2*a
  if (isNaN(x+x2)) return null
  return (-b/a).toFixed(2)*1
}
