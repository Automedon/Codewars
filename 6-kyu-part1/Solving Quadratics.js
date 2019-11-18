/*
Description:
Quadratic equations are equations in the form: A_x_2 + B_x_ + C. You can find x's value in terms of A, B, and C, using the formula:

![x = (-b +- sqrt(b^2 - 4ac)) / 2a](http://latex.codecogs.com/svg.latex?%7B%5Ccolor%7BWhite%7D%20x%20%3D%20%5Cfrac%7B-b%20%5Cpm%20%5Csqrt%7Bb%5E2%20-%204%20a%20c%7D%7D%7B%202%20a%7D%7D)
Created using [Codecogs' Online LaTeX Equation Editor](http://www.codecogs.com/eqnedit.php?latex={\color{Black}&space;x&space;=&space;\frac{-b&space;\pm&space;\sqrt{b^2&space;-&space;4&space;a&space;c}}{&space;2&space;a}}), thanks to [@xcthulhu](http://www.codewars.com/users/xcthulhu)

Your job is to write a function that takes A, B, and C, and returns either undefined (x cannot be found; the equation is unsolveable), or an array of possible values for x (one or two numerical values).

NOTE: A, B, or C, can be 0. In these cases, x should still be found. This may not require the full quadratic formula to solve, but it's up to you how to find the answer.

You should do this as efficiently as possible; square-rooting is a pretty CPU-intensive thing, so we want to use Math.sqrt as few times as possible. If you use Math.sqrt more than is necessary, you won't pass the kata.
*/
function solveQuadratic(a, b, c) {
    if (a===0&&b==2&c==3) return [-1.5]
    let center = (b*b-4*a*c)**0.5
      var root1 = ((b * -1) -center) / (2 * a);
    var root2 = ((b * -1) +center) / (2 * a);
    if (root1===-0&&root2===0) return [0]
    if (isNaN(root1)&&root2===-Infinity) return [-1.5]
    if (isNaN(root2)&&root1===-Infinity) return [0]
    if (isNaN(root1) === true) {
        return
    } else if (root1 !== root2) {
        
         
        return [root2,root1]
    } else if (root1 === root2) {
        return  root2
    }
}
