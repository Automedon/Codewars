/*
Description:
source: imgur.com

Background
A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:

6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
Task
You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

Notes
There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed beside each bar except where the count is 0
The number of rolls may vary but there are never more than 100
*/


function histogram(results) {
  return `6|${"#".repeat(results[5])}${results[5] > 0 ? " " + results[5] : ""}
          5|${"#".repeat(results[4])}${results[4] > 0 ? " " + results[4] : ""}
          4|${"#".repeat(results[3])}${results[3] > 0 ? " " + results[3] : ""}
          3|${"#".repeat(results[2])}${results[2] > 0 ? " " + results[2] : ""}
          2|${"#".repeat(results[1])}${results[1] > 0 ? " " + results[1] : ""}
          1|${"#".repeat(results[0])}${results[0] > 0 ? " " + results[0] : ""}
`
}
