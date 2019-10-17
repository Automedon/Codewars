/*
Description:
Assume that you started to store items in progressively expanding square location, like this for the first 9 numbers:

05 04 03
06 01 02
07 08 09
And like this for the expanding to include up to the first 25 numbers:

17 16 15 14 13
18 05 04 03 12
19 06 01 02 11
20 07 08 09 10
21 22 23 24 25
You might easily notice that the first - and innermost - layer containes only one number (01), the second one - immediately around it - contains 8 numbers (number in the 02-09 range) and so on.

Your task is to create a function that given a number n simply returns the number of layers required to store up to n (included).

layers(1) === 1
layers(5) === 2
layers(25) === 3
layers(30) === 4
layers(50) === 5
Fair warning: you will always and only get positive integers, but be ready for bigger numbers in the tests!
*/
function layers(n){
  let layer= 1;
  let a= 1;
    while (a**2 < n){
      layer += 1
      a += 2}
    return layer
}
