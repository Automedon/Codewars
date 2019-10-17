/*
Description:
Imagine you travel from USA to Europe and rent a car. You drive through the cities and your tank goes empty.

So you drive to a gas station. You look at the price blackboard:

+---------------------+  
| Benzin   | Diesel   |  
| 1.41 €/l | 1.04 €/l |  
+---------------------+  
The question is now: How much more (in USD, rounded to the nearest cent) would you pay in Europe compared to filling up in the USA?

Following values are predefined:

lit2gal     // volume factor
eur2usd     // currency factor  
usPrice     // Object with US Fuel prices as .diesel and .gas 
euPrice     // Object with EU Fuel prices as .diesel and .gas 
But remember, in the US is not Dollar / Liter expected but in Dollar / Gallon!
*/

function howMuchInUSA(fuel, amountLiter) {
  if (fuel === "gas")
    return (amountLiter * 0.73433333333333333333).toFixed(2) * 1;
  return (amountLiter * 0.614).toFixed(2) * 1;
}
