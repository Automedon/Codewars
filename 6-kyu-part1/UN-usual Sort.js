/*
Description:
In another Kata I came across a weird sort function to implement. We had to sort characters as usual ( 'A' before 'Z' and 'Z' before 'a' ) except that the numbers had to be sorted after the letters ( '0' after 'z') !!!

( After a couple of hours trying to solve this unusual-sorting-kata I discovered final tests used **usual** sort (digits **before** letters) :) )

So, the unusualSort/unusual_sort function you'll have to code will sort letters as usual, but will put digits (or one-digit-long numbers ) after letters.

###Examples

unusualSort(["a","z","b"])  // -> ["a","b","z"]  as usual
unusualSort(["a","Z","B"])  // -> ["B","Z","a"]  as usual

//... but ...
unusualSort(["1","z","a"])  // -> ["a","z","1"]
unusualSort(["1","Z","a"])  // -> ["Z","a","1"]
unusualSort([3,2,1"a","z","b"])  // -> ["a","b","z",1,2,3]
unusualSort([3,"2",1,"a","c","b"])  // -> ["a","b","c",1,"2",3]
Note: digits will be sorted after "same-digit-numbers", eg: 1 is before "1", "2" after 2.

unusualSort([3,"2",1,"1","3",2])  // -> [1,"1",2,"2",3,"3"]
You may assume that argument will always be an array/list of characters or one-digit-long numbers.
*/
function unusualSort(arrayOfChars){
  let a = arrayOfChars.filter(v=>/[a-z]/.test(v)).sort()
  let A = arrayOfChars.filter(v=>/[A-Z]/.test(v)).sort((a,b)=>a.localeCompare(b))
  let n = arrayOfChars.filter(v=>/[0-9]/.test(v)).sort((a,b)=>a-b||typeof a === 'string')
  return A.concat(a).concat(n)
}
