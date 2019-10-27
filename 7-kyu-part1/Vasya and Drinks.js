/*
Description:
Vasya loves orange juice very much. That's why any food and drink in his kitchen necessarily contains orange juice. There are some drinks in his fridge, the volume fraction of orange juice in these drinks equals to some percent.

Lets say there are 3 drinks:

Drink №1 contains 50% of orange juice 
Drink №2 contains 100% of orange juice 
Drink №3 contains 50% of orange juice 
One day Vasya decided to make himself an orange cocktail. He took equal proportions of each of these drinks and mixed them. Then he wondered, how much orange juice the cocktail has.

Print the volume fraction in percent of orange juice in Vasya's cocktail.

!You should round your answer to the 4 digits after decimal point.

###Examples:

orangeFraction("50 50 100") // =>  Output cocktail contains 66.6667 % of orange juice
orangeFraction("0 25 50 75") // => Output cocktail contains 37.5000 % of orange juice
*/
function orangeFraction(fractions) {
  let arr = fractions.split` `.reduce((a, b) => a + b * 1, 0);
  return (arr / fractions.split` `.length).toFixed(4) * 1;
}
