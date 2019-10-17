/*
Description:
Task
You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 x 104, ..., the 100th one should contain numbers from 99 x 104 + 1 to 106 and so on.

All the numbers will then be written down in groups to the text file in such a way that:

the groups go one after another;
each non-empty group has a header which occupies one line;
each number in a group occupies one line.
Calculate how many lines the resulting text file will have.

Example
For a = [20000, 239, 10001, 999999, 10000, 20566, 29999],

the output should be 11.

The numbers can be divided into 4 groups:

239 and 10000 go to the 1st group (1 ... 104);

10001 and 20000 go to the second 2nd (104 + 1 ... 2 x 104);

20566 and 29999 go to the 3rd group (2 x 104 + 1 ... 3 x 104);

groups from 4 to 99 are empty;

999999 goes to the 100th group (99 * 104 + 1 ... 106).

Thus, there will be 4 groups (i.e. four headers) and 7 numbers,

so the file will occupy 4 + 7 = 11 lines.

The file like this:

1-10000:
239
10000
10001-20000:
10001
20000
20001-30000:
20566
29999
990001-1000000:
999999
Input/Output
[input] integer array a

Constraints: 1 ≤ a.length ≤ 104, 1 ≤ a[i] ≤ 106.

[output] an integer

The number of lines needed to store the grouped numbers.
*/
function numbersGrouping(a) {
  return new Set(a.map(x=>Math.ceil(x/10000))).size+a.length
}
