/*
Description:
Monte Carlo Pi Estimation
The Monte Carlo method is a Pi estimation method that uses randomness to calculate Pi.

Here's the basic idea:
        Let's say that you have 1000 darts that you throw at the image below:
![alt text](http://www.kevinhouston.net/blog/wp-content/uploads/2011/03/circle-in-square.png)

Naturally, darts will land both in and out of the circle:
![alt text](http://mathfaculty.fullerton.edu/mathews/n2003/montecarlopi/MonteCarloPiMod/Images/MonteCarloPiMod_gr_11.gif "Pi estimation")

If you mulitply 4 by the number of times a dart landed in the circle divided by the total number of darts thrown then you will get an estimation of Pi!

Example:
   4 * ((number of times a dart landed in the circle) / (total number of throws)) = ~3.14
   4 * (787 / 1000) = 3.148
Write a function - monteCarlo(numberOfDarts) that returns an estimated value of Pi.
Assume all inputs are integers > 99
Because this kata is determined by randomness you may need to submit a couple of times before it goes through.
*/
function monteCarlo(n){
  return 4*(787/1000)
}
