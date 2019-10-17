/*
Description:
Hogwarts' Sorting Hat is lost!

Dumbledore asks you for help!

Make a function that takes an array of string names and randomly assigns each to the 4 houses in Hogwarts by returning an array of houses where each element in the array is the house of the matching name in the input array.

Note if “Harry Potter” is in the array, he MUST go to “Gryffindor” (the input array and output array should have "Harry Potter" and "Gryffindor" at the same index, respectively).

The first parameter will be the array of string names, and should be the same length as the returned array.

Remember, you can create a blank array and then add onto it with the .push() function

var blankArr = [];
blankArr.push("something");
Also, the second parameter is an array of the 4 houses by default. Users should be able to set their own houses if they want.

No need to verify array length.
*/
function sortingHat(names, houses = ["Gryffindor","Ravenclaw","Hufflepuff","Slytherin"]){
  let arr =[];
  for(let i=0;i<names.length;i++){
    if (names[i]==='Harry Potter')arr.push("Gryffindor")
    else arr.push(houses[~~(Math.random()*houses.length)])
  }
  return arr
}
