/*
Description:
Fast & Furious Driving School's (F&F) charges for lessons are as below:

Time	Cost
Up to 1st hour	$30
Every subsequent half hour**	$10
** Subsequent charges are calculated by rounding up to nearest half hour.
For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

For a given lesson time in minutes (min) , write a function price to calculate how much the lesson costs.
*/
function cost(mins) {
  return 30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10;
}
