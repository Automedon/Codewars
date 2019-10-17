/*
Description:
Musical set theory provides concepts and tools for musical analysis. Most of it deals with sets of pitches and pitch classes. For this purpose, we can assign numbers to each different pitch class (note) as following: C=0, C#=1, D=2, D#=3, E=4, F=5, F#=6, G=7, G#=8, A=9, A#=10, B=11. This way, a pitch class set is just an unordered collection of pitch classes (notes) without any duplication. So, [2, 4, 6] is an example of a pitch class set, as well as [3, 6, 8, 2, 10, 0]. They are usually represented this way, similar to an array.

There are some simple operations/transformations that one can do with these pitch class sets. Two of them are the transposition and the inversion. A transposition(T) is simply to add the same number (between 0 and 11) to all elements of the collection. A T5 of the set [1, 2, 3] should be [6, 7, 8]. Note that exist only twelve notes, so a T10 of the previous set should be [11, 0, 1], using modulo 12.

To operate an inversion(I) subtract each element of the list from twelve. Using the same set [1, 2, 3], a T0I - an inversion of T0 - should be [11, 10, 9]. Note that if one asks for the TnI inversion of some set it means the inversion of the transposition n. Consequently, the TnI of [1,2,3] should be [(12-1)+n, (12-2)+n, (12-3)+n] <=> [0,11,10].

Here you can find extra information if needed. Here you find an example of this kind of calculator.

You should create a function that receives a pitch class set (array) as first argument and a transposition or inversion operation (string) as second argument, formated as "Tn" (transposition n) or "TnI" (inversion n) where n is a number between 0 and 12. Below are some examples:

operation([4,6,7,10], "T1");
result = [5,7,8,11]

operation([4,6,7,10], "T1I");
result = [3,6,7,9] //sorted

operation([10,6,7], "T10");
result = [4,5,8] //sorted

operation([10,6,7], "T10I");
result = [0,3,4] //sorted
Notice how it should always return a sorted array independently of the input.
*/
function operate(pcSet, operation) {
  let digits=operation.replace(/[^0-9]/g,'')*1
  let arr=pcSet.map(v=>(v+digits)%12)
  if (operation[operation.length-1]==="I"){
    return pcSet.map(v=>(12-v+digits)%12).sort((a,b)=>a-b)
  }
  return arr.sort((a,b)=>a-b)
}
