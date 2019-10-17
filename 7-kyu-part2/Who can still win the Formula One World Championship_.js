/*
Description:
Situation
It's the final few races of the Formula One race season!!! The season has been hard fought, but who can still win mathematically win the World Championship?

Arguments
You are provided with two pieces of data as arguments. The first argument is an object containing a list of drivers and their current individuals points scored so far this season. Example below:

{
  "Hamilton": 200,
  "Bottas": 180,
  "Raikkonen": 210
}
The second argument is the number of race remaining in the season. Number of races remaining will always be 7 or fewer, but greater than 0.

Task
Your task is to find out who can still mathematically win the championship (no matter how unlikely in reality). In Formula One a driver scores 25 points for a win. Drivers score 0 points if they do not complete the race or finish lower than 10th. Points for other placings are irrelevant to this kata.

Return the drivers who can mathematically still win the championship in a string of the following format:

If one driver has an unassailable lead return "X has already won the championship!"

If multiple drivers can win the championship, return "X, Y and Z can still win the championship.". Drivers should be returned in alphabetical order.

Note
This kata does not assess the potential for tied scores at the end of the season. If a driver can theoretically only tie with other drivers at the top of the championship table, he should be considered a possible winner of the championship.

alt text
*/
function canStillWin(table, racesRemaining) {
  let win = Object.entries(table).sort((a, b) => a[1] - b[1]);
  let arr = win.slice(0, -1);
  for (let i = 0; i < racesRemaining; i++) {
    arr.every(v => (v[1] += 25));
  }
  let winners = [win.slice(-1)[0][0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= win[win.length - 1][1]) winners.push(arr[i][0]);
  }
  winners = winners.sort();
  if (winners.length === 1)
    return `${winners[0]} has already won the championship!`;
  let str = "";
  for (let i = 0; i < winners.length; i++) {
    if (i + 1 < winners.length) str += winners[i] + ", ";
    else str += "and " + winners[i] + " can still win the championship.";
  }
  return str.replace(/, and/, " and");
}
