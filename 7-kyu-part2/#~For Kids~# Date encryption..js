/*
Description:
#~For Kids Challenges~#
Your task is to write a function that takes an date in format Y-m-d(String) and return it in an encrypted format, to do this you will break the string of date, each 2 characteres of date(except '-') being an ASCII numeric code add 50 to it and return the result translated according to ASCII table with the '-' between it.
Example: "2017-01-21" -> You will get 20 17 - 01 - 21 (for each of then +50)-> 70 67 - 51 - 71 ->(ASCII Translation)-> "FC-3-G"

"1966-12-07" -> "Et->-9"
Have fun!
*/
function translateDate(dateStr) {
  dateStr = dateStr.split("-").join``;
  let arr = [];
  for (let i = 0; i < dateStr.length; i += 2) {
    arr.push(dateStr.slice(i, i + 2) * 1);
  }
  arr = arr.map(v => String.fromCharCode(v + 50));
  return [arr[0] + arr[1], arr[2], arr[3]].join`-`;
}
