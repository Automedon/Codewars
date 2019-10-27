/*
Description:
Take a look at this pirate game.

Give Amaro an array to confirm his logic for the next time, when the number of pirates changes.

Keep in mind that each time the pirates find a treasure, the amount of gold equals to the number of pirates * 20.

Example:

If number of pirates is 2, including Amaro, then array = [40, 0], So he can keep all of the gold to himself.

If number of pirates is 3, including Amaro, then array = [59, 0, 1], and 59 gold is his for the taking.

If number of pirates is 4, including Amaro, then array = [79, 0, 1, 0], and 79 gold is his to take.

If number of pirates is 5, including Amaro, then array = [98, 0, 1, 0, 1], and 98 gold is his for the taking.

...
*/
function amaroPlan(pirateNum) {
  let gold = pirateNum * 20;
  let arr = [];
  for (let i = 1; i < pirateNum; i++) {
    if (i % 2 === 0) {
      arr.push(1);
      gold--;
    } else {
      arr.push(0);
    }
  }
  arr.unshift(gold);
  return arr;
}
