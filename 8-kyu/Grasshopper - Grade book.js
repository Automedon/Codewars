/*
Description:
Grade book
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
  let q=(s1+s2+s3)/3
  if (q>=90)return 	'A'
  if (q>=80)return 	'B'
  if (q>=70)return 	'C'
  if (q>=60)return 	'D'
  if (q>=0)return 	'F'
  
}
