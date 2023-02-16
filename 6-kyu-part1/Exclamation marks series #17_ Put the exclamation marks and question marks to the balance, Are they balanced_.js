/*
Description:
Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

Examples
balance("!!","??") === "Right"
balance("!??","?!!") === "Left"
balance("!?!!","?!?") === "Left"
balance("!!???!????","??!!?!!!!!!!") === "Balance"
Note
Please don't post issue about difficulty or duplicate.
*/

function balance(left, right) {
  let l = left
    .split("")
    .map(v => (v === "!" ? (v = 2) : (v = 3)))
    .reduce((a, b) => a + b, 0);
  let r = right
    .split("")
    .map(v => (v === "!" ? (v = 2) : (v = 3)))
    .reduce((a, b) => a + b, 0);
  return l > r ? "Left" : l === r ? "Balance" : "Right";
}
