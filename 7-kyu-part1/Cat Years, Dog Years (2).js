/*
Description:
This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/
var ownedCatAndDog = function(catYears, dogYears) {
  function getAge(years, a) {
    return years < 15 ? 0 : years < 24 ? 1 : 2 + (years - 24) / a;
  }
  return [Math.floor(getAge(catYears, 4)), Math.floor(getAge(dogYears, 5))];
};
