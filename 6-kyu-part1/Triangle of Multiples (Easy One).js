/*
Description:
See the following triangle:

____________________________________
 1                                      
 2   4   2                              
 3   6   9   6   3                      
 4   8   12  16  12  8   4             
 5   10  15  20  25  20  15  10  5   
 ___________________________________
The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

Create a function that may output an array with three results for each value of n.

triang_mult(n)  ----> [total_sum, total_even_sum, total_odd_sum]
Our example will be:

triang_mult(5) ----> [225, 144, 81]
Features of the random tests:

number of tests = 100
49 < n < 5000
Enjoy it! This kata will be translated in another languages soon
*/
function multTriangle(n) {
    let even = 0
    let odd = 0
    for (let i=1;i<=n;i++){
      for (let j=i;j<=i*i;j+=i){ 
          if (j<i*i){
          if (j%2===0)even+=j*2;
          if (j%2!==0)odd+=j*2;
          } else {
          if (j%2===0)even+=j;
          if (j%2!==0)odd+=j;
          }
      }
    }
    return [even+odd,even,odd];
}
