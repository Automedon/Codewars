/*
Description:
In this kata you will have to write a function that takes litres and pricePerLiter as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!
*/
const fuelPrice = (litres, pricePerLiter) => {
  let discountCents = 0
  if (litres >= 2) discountCents = 0.05
  if (litres >= 4) discountCents = 0.1
  if (litres >= 6) discountCents = 0.15
  if (litres >= 8) discountCents = 0.2
  if (litres >= 10) discountCents = 0.25
  const totalPrice = litres * pricePerLiter - litres * discountCents
  return Number(totalPrice.toFixed(2))
}
