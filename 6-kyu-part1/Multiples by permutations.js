/*
Description:
The number 1035 is the smallest integer that exhibits a non frequent property: one its multiples, 3105 = 1035 * 3, has its same digits but in different order, in other words, 3105, is one of the permutations of 1035.

The number 125874 is the first integer that has this property when the multiplier is 2, thus: 125874 * 2 = 251748

Make the function search_permMult(), that receives an upper bound, nMax and a factor k and will output the amount of pairs bellow nMax that are permuted when an integer of this range is multiplied by k. The pair will be counted if the multiple is less than nMax, too

Let'see some cases:

search_permMult(10000, 7) === 1 # because we have the pair 1359, 9513
search_permMult(5000, 7) === 0 # no pairs found, as 9513 > 5000

search_permMult(10000, 4) === 2 # we have two pairs (1782, 7128) and (2178, 8712)
search_permMult(8000, 4) === 1 # only the pair (1782, 7128) 

search_permMult(5000, 3) === 1 # only the pair (1035, 3105)
search_permMult(10000, 3) === 2 # found pairs (1035, 3105) and (2475, 7425)
Features of the random Tests:

10000 <= nMax <= 100000
3 <= k <= 7
Enjoy it and happy coding!!
*/
function search_permMult(nMax, k) {
  let solutions = 0;
  let digitSort = (n) => n.toString().split('').sort((a, b) => b - a).join('');
  for (let i = 1; i <= nMax/k; i++) {
    if (digitSort(i) === digitSort(i*k)) solutions++;
  }
  return solutions;
}
