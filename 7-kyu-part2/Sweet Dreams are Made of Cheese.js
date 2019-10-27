/*
Description:
Mr Leicester's cheese factory is the pride of the East Midlands, but he's feeling a little blue. It's the time of the year when the taxman is coming round to take a slice of his cheddar - and the final thing he has to work out is how much money he's spending on his staff. Poor Mr Leicester can barely sleep he's so stressed. Can you help?

Mr Leicester employs 4 staff, who together make 10 wheels of cheese every 6 minutes.
Worker pay is calculated on how many wheels of cheese they produce in a day.
Mr Leicester pays his staff according to the UK living wage, which is currently £8.75p an hour. There are 100 pence (p) to the UK pound (£).
The input for function payCheese will be provided as an array of five integers, one for each amount of cheese wheels produced each day.

When the workforce don't work a nice integer number of minutes - much to the chagrin of the company accountant - Mr Leicester very generously rounds up to the nearest hour at the end of the week (not the end of each day). Which means if the workers make 574 wheels on each day of the week, they're each paid 29 hours for the week (28.699 hours rounded up) and not 30 (6 hours a day rounded up * 5).

The return value should be a string (with the £ included) of the total £ of staff wages for that week.
*/
function payCheese(arr) {
  return "£" + Math.ceil(arr.reduce((a, b) => a + b, 0) / 100) * 35;
}
