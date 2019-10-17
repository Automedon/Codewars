/*
Description:
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/
function countMe(data) {
  if (data.split("").every(v => v * 1 == v.toString())) {
    let arr = "";
    let num = 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === data[i + 1]) {
        num++;
      } else {
        arr += `${num}${data[i]}`;
        num = 1;
      }
    }
    return arr;
  }
  return "";
}
