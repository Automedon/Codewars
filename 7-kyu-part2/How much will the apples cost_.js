/*
Buying in bulk is often cheaper than buying individual items. You will have to determine the total cost of apples. Write a function called apples that takes the arguments kilos and price. Purchases of 1 or more kilograms get a discount of 5%, purchases of 3 or more kilograms get a discount of 10%, purchases of 5 or more kilograms get a discount of 15%, and so on until you reach the maxium discount of 30%.
*/
function apples(k, p) {
  let disc = 0;
  if (k >= 1) disc = 5;
  if (k >= 3) disc = 10;
  if (k >= 5) disc = 15;
  if (k >= 7) disc = 20;
  if (k >= 9) disc = 25;
  if (k >= 11) disc = 30;
  p = p - p * (disc / 100);
  return Math.round(p * k * 10000) / 10000;
}
