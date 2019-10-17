/*
Description:
Given a string with friends to visit in different states:

ad3="John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA"
we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

Massachusetts
.....^John Daggett 341 King Road Plymouth Massachusetts
.....^Sal Carpenter 73 6th Street Boston Massachusetts
^Virginia
.....^Alice Ford 22 East Broadway Richmond Virginia
Spaces not being always well seen, in the above result ^ means a white space.

Not printed, the resulting string will be:

"Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
Notes
There can be a blank last line in the given string of adresses.
The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
You can see another example in the "Sample tests".
States
For the lazy ones:

'AZ': 'Arizona',
'CA': 'California',
'ID': 'Idaho',
'IN': 'Indiana',
'MA': 'Massachusetts',
'OK': 'Oklahoma',
'PA': 'Pennsylvania',
'VA': 'Virginia'
*/
function byState(str) {
  let arr = str.replace(/,/g, "").split`\n`;
  let states = [
    ["AZ", "Arizona"],
    ["CA", "California"],
    ["ID", "Idaho"],
    ["IN", "Indiana"],
    ["MA", "Massachusetts"],
    ["OK", "Oklahoma"],
    ["PA", "Pennsylvania"],
    ["VA", "Virginia"]
  ];
  let res = "";
  states.forEach(([s, n]) => {
    let temp = arr.filter(x => x.slice(-2) === s).sort();
    if (temp.length) {
      res += "\r\n " + n + "\r\n";
      res += temp.map(x => `..... ${x.slice(0, -3)} ${n}`).join`\r\n`;
    }
  });
  return res.slice(3);
}
