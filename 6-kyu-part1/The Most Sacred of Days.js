/*
Description:
In the United States, one of the most important days of the year is colloquially known as "Black Friday". On this day, millions of pilgrims sojourn to their local centers of capitalism to stand in long lines and trade currency for flat-screen TVs and two-dollar DVDs.

Black Friday—so-called because on this day some retailers' accounting books move from "the red" (having net losses) to "the black" (having net profits)—is traditionally celebrated on the day immediately following the American Thanksgiving holiday, which always falls on the fourth Thursday in November.

You have recently been hired by a large boat retailer, Beast Bouy, who wants to know exactly what date they can expect shoppers to crowd their store and purchase their stocks of moderately discounted jet-skis. Your first task at this job is create a blackFriday function which accepts an integer year, and returns the day of the month of November that Black Friday falls on in that year. Your function only needs to support years after 1752*.
*/
function blackFriday(year) {
  let i = 29;
  while (new Date(year, 10, i).getDay() !== 5) {
    i--;
  }
  return new Date(year, 10, i).getDate();
}
