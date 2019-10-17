/*
Description:
It seems as though the infamous soundcloud rapper "6ix 9ine" has been locked away for good. As sad as this may be, his name will surely live on...

Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.

How to figure out one's Rap-Name:

Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
Note: only integers are admissible, therefore round up averages that are decimal
Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'
*/
function rapNameGen(dob) {
  let n = dob.split`.`;
  let f = Math.ceil(n[0].split``.reduce((a, b) => a + b * 1, 0) / 2);
  let s = Math.ceil(n[2].split``.reduce((a, b) => a + b * 1, 0) / 2);
  let dict = {
    0: "0ero",
    1: "1ne",
    2: "2wo",
    3: "3hree",
    4: "4our",
    5: "5ive",
    6: "6ix",
    7: "7even",
    8: "8ight",
    9: "9ine"
  };
  return `${dict[f]} ${dict[s]}`;
}
