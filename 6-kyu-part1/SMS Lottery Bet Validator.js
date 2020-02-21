/*
Description:
Story
You were asked to write a simple validator for a company that is planning to introduce lottery betting via text messages. The same validator will be used for multiple games: e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers between 1 and M (both included), separated by a comma (,) and/or space(s). Any other character makes the bet invalid.

Your task
You receive the game type and the user's text message as input, and you need to check if the bet is valid or not. If it's valid, return the chosen numbers as a list, sorted in increasing order. If it's invalid, return None, null, nil as appropriate to your language.

Note:

Leading and trailing spaces will not be tested. Tabs, newlines and other whitespaces are not tested either. Think of a classic Nokia 3310 user for reference :-)

Examples
validate_bet([5, 90], "1 2 3 4 5")       # [1, 2, 3, 4, 5]
validate_bet([5, 90], "5 , 3, 1  4,2")   # [1, 2, 3, 4, 5]
validate_bet([5, 90], "1, 2; 3, 4, 5")   # None
validate_bet([5, 90], "1, 2, 3, 4")      # None
validate_bet([5, 90], "1, 2, 3, 4, 95")  # None
*/
function validateBet(game, text) {
  if (/[^0-9 ,]/g.test(text)) return null;
  let arr;
  try {
    arr = text
      .match(/\d+/g)
      .map(v => v * 1)
      .sort();
  } catch (e) {
    return null;
  }
  if (arr.length !== game[0]) return null;
  arr = [
    ...new Set(
      text
        .match(/\d+/g)
        .map(v => v * 1)
        .sort((a, b) => a - b)
    )
  ];
  if (arr.length !== game[0]) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > game[1] || arr[i] < 1) return null;
  }
  return arr;
}
