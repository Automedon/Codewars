/*
Description:
Pythagorean Triples
A Pythagorean triplet is a set of three numbers a, b, and c where a^2 + b^2 = c^2. In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function pythagorean_triplet.

Your task
In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function, where 0 < n < 10000000

Examples
One such triple is 3, 4, 5. For this challenge, you would be given the value 60 as the argument to your function, and then it would return the Pythagorean triplet in an array [3, 4, 5] which is returned in increasing order. 3^2 + 4^2 = 5^2 since 9 + 16 = 25 and then their product (3 * 4 * 5) is 60.

More examples:

argument	returns
60	[3, 4, 5]
780	[5, 12, 13]
2040	[8, 15, 17]
*/
function pythagoreanTriplet (n) {
  for (let i=1;i<300;i++){
    for (let j=1;j<300;j++){
      for (let k=1;k<300;k++)
      if (i*i+j*j===k*k&&i*j*k===n) return [i,j,k]
    }
  }
}
