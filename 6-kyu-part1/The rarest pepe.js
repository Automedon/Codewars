/*
Description:
The pepe market is on the verge of collapse. In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more. Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a list of pepes (pepes), returns the rarest pepe in the list. If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order. Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.
*/
function findRarestPepe(pepes) {
  const dict = pepes.reduce((a, b) => ((a[b] = a[b] ? a[b] + 1 : 1), a), {});
  let min = Math.min(...Object.values(dict));
  if (min >= 5) return "No rare pepes!";
  let arr = [];
  for (let i in dict) {
    if (dict[i] === min) {
      arr.push(i);
    }
  }
  if (arr.length === 1) return arr + "";
  if (arr.length === 0) return "No rare pepes!";
  return arr.sort();
}
