/*
A Jubilee Year is celebrated in Santiago de Compostela whenever July 25, the day of Santiago the Elder, falls on a Sunday.

For example, as of 2018 we know the last Jubilee year was 2010 and the next is going to be 2021.

Your task is to create the function isJubilee() that will tell us whether a given year was/is a Jubilee Year or not. For this kata, we're just interested in years from 1900 to 2099 (both included), so don't expect your function to receive any input out of that range.

Example:

  isJubilee(2020);  // <-- returns false  because 2020/07/25 is Saturday
  isJubilee(2021);  // <-- returns true   because 2021/07/25 is Sunday
*/
function isJubilee(year) {
  return (
    new Date(Date.UTC(year, 07 - 1, 25)).toLocaleString("en-US", {
      weekday: "long"
    }) === "Sunday"
  );
}
