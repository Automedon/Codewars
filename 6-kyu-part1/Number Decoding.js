/*
Description:
Welcome to my (amazing) kata!
You are given a gigantic number to decode. Each number is a code that alternates in a pattern between encoded text and a smaller, encoded number. The pattern's length varies with every test, but the alternation between encoded text and an encoded number will always be there. Following this rule, each number tested begins with encoded text and ends with an encoded number.

How the encoding works
Now, we should probably review how the string of numbers is formed - considering you have to unform it. So, first, some text is taken, and encoded. The system of encoding is taking each letter's position in the alphabet and adding 100 to it. For example, m in the real text would be 113 in the code-number.

After the text, there is a binary number. You should convert this number to a normal, base 10 decimal (all of them can be converted into whole, non-negative numbers).

Separating encoded text and encoded numbers, there is a 98. Because the numbers are in binary, the only digits they use are '0' and '1', and each letter of the alphabet, encoded, is between 101-127, all instances of 98 are to indicate a separation between encoded text and encoded numbers. There may also be a 98 at the very end of the number.

When you return your final answer, the text and numbers should always be separated by a comma (,)

Example
decode(103115104105123101118119981001098113113113981000) = "codewars, 18, mmm, 8"
The part of the code until the first 98 can be decoded to "codewars". 10010 is binary for 18. 113113113 translates to "mmm". And 1000 is binary for 8.

Here is a visualisation of the example:

103 115 104 105 123 101 118 119   98   10010   98   113 113 113   98   1000
 c   o   d   e   w   a   r   s     ,     18     ,    m   m   m     ,     8
Good luck!
*/
function decode(number){
  let a = number.split`98`.filter(v=>v).map((v,i)=>{
    if (i%2===0) {
      let arr = []
      for (let i=0;i<v.length;i+=3){
        arr.push(v.slice(i,i+3))
      }
      return arr.map(v=>String.fromCharCode(v*1-4)).join``
    } 
    else return parseInt(v,2)
  })
  return a.join`, `
}
