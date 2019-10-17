/*
Description:
Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
Enjoy the kata!!
*/
function nextNumb(val) { 
    for (let i=val+1;i<=9999999999;i++)
    {
    if (i.toString().length===[...new Set(i.toString().split(''))].length&&
    i%2!==0&&(i%3===0)){return i}
    }
    
    return "There is no\
 possible number that fulfills those requirements"; 
}
