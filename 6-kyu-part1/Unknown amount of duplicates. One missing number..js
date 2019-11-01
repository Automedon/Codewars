/*
Description:
This challenge is an extension of the kata of Codewars: Missing and Duplicate Number", authored by the user Uraza. (You may search for it and complete it if you have not done it)

In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

Let's see an example:

arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

500 <= a <= 50000
a + k <= b and 100 <= k <= 1000000
amount of duplicates variable, according to the length of the array
*/
function findDupsMiss(arr) {
    let sort = arr.sort((a,b)=>a-b)
    let mis = 0
    let dup = []
    let once = true
    for (let i=0;i<sort.length;i++){
      if (once){
         if (sort[i+1]!==sort[i]+1&&sort[i]!==sort[i+1]){mis=sort[i]+1;once=false}
         }
     if (sort[i]===sort[i+1]) dup.push(sort[i])
    }
    return [mis,[...new Set(dup)]];
}
