/*
Description:
Write a function to calculate how much weight you will gain or lose on your diet.

function diet(meals, requiredCalories, time)
{
}
The function will take an array of Meal objects, your daily caloric requirement and a time in days. Your task is to calculate the amount of calories you will get from your food and use that information to see how much your weight will change.

Meal object has three properties:

protein

fat

carbohydrates

Each of those is in grams. Assume the following caloric content per gram of nutrient:

protein - 4 calories per gram

fat - 9 calories per gram

carbohydrates - 4 calories per gram

Note: To lose 1kg of weight, you have to spend 7700 calories.

Round to second decimal place.
*/
function diet(meals, requiredCalories, time) {
  let cal = meals
    .map(v => v.protein * 4 + v.fat * 9 + v.carbohydrates * 4)
    .reduce((a, b) => a + b, 0);
  return Math.round(((cal - requiredCalories * time) / 7700) * 100) / 100;
}
