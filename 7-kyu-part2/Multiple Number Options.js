/*
Description:
You will be dealing with two digits selected from numbers 1-9. Your task is to create a function that takes all the possible variations of the numbers 1 through to nine, EXCLUDING the numbers in the test case, for example: "22" will return all the possible variations of ["1","3","4","5","6","7","8","9"]

"23" will return all the possible variations of ["1","3","4","5","6","7","8","9"] and ["1","2","4","5","6","7","8","9"]

and it should be in ascending order for example the start of "23" would be:
[ '11', '12', '14', '15', '16', '17', '18', '19', '31', '32', '34',

.....etc Matching all the numbers in "2" with all the numbers in "3".

Note, for the above example "23" the result will contain both "2" and "3" as the variations for the number "2" include a "3" and the variations for the number "3" include a "2". The only time where your result will not contain the numbers in the test case, is if the test case is the same digit twice e.g. "22", "33", "44"...etc! for example the start of the "11" combination is [ '22', '23', '24', '25', '26', '27', '28', '29', '32', '33', '34', '35', '36', '37', '38', '39', '42',

.....etc

Good Luck!
*/
const numMix = x => {
  const res = [];
  for (let i = 1; i < 10; i++)
    for (let j = 1; j < 10; j++)
      if (i != x[0] && j != x[1]) res.push(`${i}${j}`);
  return res;
};
