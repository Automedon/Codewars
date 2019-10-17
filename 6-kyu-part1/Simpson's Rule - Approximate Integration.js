/*
Description:
An integral:

\int_{a}^{b}f(x)dx

can be approximated by the so-called Simpson’s rule:

 \frac{b-a}{3n}(f(a)+f(b)+4\sum_{i=1}^{n/2}f(a+(2i-1)h)+2\sum_{i=1}^{n/2-1}f(a+2ih))

Here h = (b-a)/n, n being an even integer and a <= b. We want to try Simpson's rule with the function f:

f(x) = \frac{3}{2}sin^3x

The task is to write a function called simpson with parameter n which returns the value of the integral of f on the interval  \left [ \right 0,\pi\left \right ] .

Don't round or truncate your results. See in "RUN EXAMPLES" the function assertFuzzyEquals or testing. n will always be even.

Note: we know that the exact value of the integral of f on the given interval is 2.

You can see: http://www.codewars.com/kata/5562ab5d6dca8009f7000050/train/javascript about rectangle method and trapezoidal rule.
*/
function simpson(n) {
  let a = 0;
  let b = Math.PI;
  let f = x => {
    return (3 * Math.pow(Math.sin(x), 3)) / 2;
  };
  let res1 = 0.0,
    res2 = 0.0;
  var h = (b - a) / n;
  for (let i = 1; i <= n / 2; i++) {
    res1 += f(a + (2 * i - 1) * h);
  }
  for (let i = 1; i <= n / 2 - 1; i++) {
    res2 += f(a + 2 * i * h);
  }

  return ((b - a) * (f(a) + f(b) + 4 * res1 + 2 * res2)) / 3.0 / n;
}
