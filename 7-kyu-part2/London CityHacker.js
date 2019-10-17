/*
Description:
You are given an array of a journey in London, UK. The array will contain bus numbers and TFL tube names as strings e.g.

londonCityHacker(['Northern', 'Central', 243, 1, 'Victoria']);

Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fair is capped for sets of two adjacent buses and calculated as one bus fair for each set.

Your task is to calculate the total cost of the journey and return the cost round to 2 decimal places in the format (where x is a number): £x.xx
*/
function londonCityHacker(journey) {
  let tube =
    Math.round(journey.filter(v => typeof v === "string").length * 2.4 * 100) /
    100;
  let bus =
    Math.round(journey.filter(v => typeof v === "number").length * 1.5 * 100) /
    100;
  let sum = tube + bus;
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "number" && typeof journey[i + 1] === "number") {
      sum -= 1.5;
      i++;
    }
  }
  return `£${sum.toFixed(2)}`;
}
