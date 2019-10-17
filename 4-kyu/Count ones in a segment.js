/*
Description:
Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) return sum of all '1' occurencies in binary representations of numbers between 'left' and 'right' (including both)

Example:
countOnes 4 7 should return 8, because:
4(dec) = 100(bin), which adds 1 to the result.
5(dec) = 101(bin), which adds 2 to the result.
6(dec) = 110(bin), which adds 2 to the result.
7(dec) = 111(bin), which adds 3 to the result.
So finally result equals 8.
WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!
*/
const pattern=(num, cipher) =>(1 << cipher) * (num >> (cipher + 1));
const restOfBinary=(num,cipher)=>Math.max(0, (num % (1 << cipher << 1)) - (1 << cipher) + 1);
const column=(num,cipher)=>pattern(num, cipher) + restOfBinary(num, cipher);
const addUpTo=(num)=>{
  let bit = 0, total = 0;
    while ((num >> bit) > 0) total += column(num, bit++);
    return total;
}
const countOnes=(left,right)=> addUpTo(right) - addUpTo(left - 1);
