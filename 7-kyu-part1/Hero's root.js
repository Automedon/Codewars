/*
Description:
One of the first algorithm used for approximating the integer square root of a positive integer n is known as "Hero's method", named after the first-century Greek mathematician Hero of Alexandria who gave the first description of the method. Hero's method can be obtained from Newton's method which came 16 centuries after.

We approximate the square root of a number n by taking an initial guess x, an error e and repeatedly calculating a new approximate integer value x using: (x + n / x) / 2; we are finished when the previous x and the new x have an absolute difference less than e.

We supply to a function (int_rac) a number n (positive integer) and a parameter guess (positive integer) which will be our initial x. For this kata the parameter 'e' is set to 1.

Hero's algorithm is not always going to come to an exactly correct result! For instance: if n = 25 we get 5 but for n = 26 we also get 5. Nevertheless 5 is the integer square root of 26.

The kata is to return the count of the progression of integer approximations that the algorithm makes.

Reference:

https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method

Some examples:

int_rac(25,1): follows a progression of [1,13,7,5] so our function should return 4.

int_rac(125348,300): has a progression of [300,358,354] so our function should return 3.

int_rac(125348981764,356243): has a progression of [356243,354053,354046] so our function should return 3.
#

You can use Math.floor (or similar) for each integer approximation.

#

Note for JavaScript, Coffescript, Typescript:

Don't use the double bitwise NOT ~~ at each iteration if you want to have the same results as in the tests and the other languages.
*/

function intRac(n, guess) {
  let steps = 0;

  while (true) {
    steps++;
    const newGuess = Math.floor((guess + Math.floor(n / guess)) / 2);
    if (Math.abs(guess - newGuess) < 1) break;
    guess = newGuess;
  }
  return steps;
}
