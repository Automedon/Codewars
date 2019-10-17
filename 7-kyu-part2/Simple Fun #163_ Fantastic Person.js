/*
Description:
Task
We have a society with n people and have a table which describes if people in that society identify themselves with others in that society.

A fantastic person is a person who everyone identifies with and who doesn't identify with anybody else but himself.

If we have a Fantastic person in the society return their index (people are number from 0 to n-1), otherwise return -1.

Note : You can assume that in this society there are no two different people who both identify with each other. Thus if a identifies with b then b is guaranteed not to and vice versa.

Example
For: table = [ [True,True,True], [False,True,True], [False,False,True]] The result should be 0.

We see that person 0 doesn't identify with anybody (except himself!), person 1 identifies only with person 0. and person 2 identifies with 0 and 1.

Hence person 0 is Fantastic Person.

Input/Output
[input] 2D boolean array table

An n by n matrix in which n[i][j] is true if and only if person j identifies with person i.

[output] an integer

the index of the Fantastic person and -1 if they don't exist.
*/
function fantasticPerson(table) {
  return table.findIndex(v=>v.every(x=>x===true)) 
}
