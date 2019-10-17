/*
Description:
Inspired by [Round to the next 5](/kata/55d1d6d5955ec6365400006d). Warning! This kata contains spoilers on the mentioned one. Solve that one first!
The Coins of Ter
Ter is a small country, located between Brelnam and the Orange juice ocean. It uses many different coins and bills for payment. However, one day, the leaders of Ter decide that there are too many small coins. Therefore, they ban the small coins. But no one knows which coins they'll ban, so they ask you to provide a tool that can recalculate a price. After all, if one does not have a 1 Terrek bill and can only give a 2 Terrek bill, one needs to adjust the oddly priced items.

Task
Write a function adjust, that takes a two integers: the lowest currency unit that's still allowed, and the price/debt that needs to get adjusted. All prices are going up, and debts are remitted. The lowest currency will always be positive.

In other words:adjust takes two integers, b and n, and returns the smallest number k, such that n <= k and k % b == 0.

Examples
adjust( 3, 0 ) ===  0
adjust( 3, 1 ) ===  3
adjust( 3, -2) ===  0
adjust( 3, -4) === -3
adjust( 3, 3 ) ===  3
adjust( 3, 6 ) ===  6
adjust( 3, 7 ) ===  9
Translator notice: Make sure that you provide about the same random tests, so that a user can get feedback during "Run tests", and not only during "Submit".
*/
function adjust(coin, price){
  for (let i=price;;i++){
  if (i>=price&&i%coin===0){
  return i;break;}
  }
}
