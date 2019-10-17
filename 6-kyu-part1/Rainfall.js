/*
Description:
dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:
if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)
Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.
Shell tests only variance
A ref: http://www.mathsisfun.com/data/standard-deviation.html
data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com
*/

function calculateData(town, strng, calulateCallback) {
  if (!towns.some(t => t == town)) {
    return -1;
  }

  const allData = strng.split("\n");
  for (const data of allData) {
    if (data.indexOf(town) !== 0) {
      continue;
    }

    const monthlyData = data
      .replace(/[a-zA-Z\:\s]+/g, "")
      .split(",")
      .map(Number.parseFloat);
    return calulateCallback(monthlyData);
  }

  return -1;
}

function mean(town, strng) {
  return calculateData(town, strng, d => d.reduce((p, c) => p + c) / d.length);
}

function variance(town, strng) {
  const avg = mean(town, strng);
  return calculateData(
    town,
    strng,
    d => d.reduce((p, c) => p + Math.pow(c - avg, 2), 0) / d.length
  );
}
const towns = [
  "Rome",
  "London",
  "Paris",
  "NY",
  "Vancouver",
  "Sydney",
  "Bangkok",
  "Tokyo",
  "Beijing",
  "Lima",
  "Montevideo",
  "Caracas",
  "Madrid",
  "Berlin"
];
