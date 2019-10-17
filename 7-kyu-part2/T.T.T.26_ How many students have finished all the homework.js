/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #26:
How many students have finished all the homework

Problem
For example:There are 60 students in a class. The teacher assigned two homework, 40 students finished the first homework, 31 students finished second homework, 4 students did not finish any homework. Please calculate: how many students have finished all the homework?

Task
Complete function howMany() that accepts three arguments:

students: Total number of students

finished: An array. It's a list of the number of students who finish each homework. The array always contains 2 elements.

unfinish: The number of students who did not finish any homework.

The result should be a number that is the number of students who have finished all the homework.

If it is not possible to get the correct result, please return -1

Examples
howMany(60,[40,31],4) === 15

Verify correctness:
The students who only finished homework1 == 40 - 15 = 25
The students who only finished homework2 == 31 - 15 = 16
The students who finished all homework   ==           15
The students who did not finish any homework ==        4
25 + 16 + 15 + 4 = 60

howMany(60,[33,44],3) === 20

Verify correctness:
The students who only finished homework1 == 33 - 20 = 13
The students who only finished homework2 == 44 - 20 = 24
The students who finished all homework   ==           20
The students who did not finish any homework ==        3
13 + 24 + 20 + 3 = 60

Edge case:
howMany(60,[40,20],0) === 0

howMany(60,[22,11],6) === -1
*/
function howMany(students,[a,b],unfinish){
  for (let i=0;i<students;i++){
    if (a-i+b-i+i+unfinish===students) return i
  }
  return -1
}
