/*
Description:
If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

Given a string:

alternate the vowels and consonants and return the lexicographically lowest element in the list
If any two or more vowels or consonants must follow each other, return "failed"
if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
Examples:

solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
solve("oruder") = "edorur"
solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
In C, return an allocated string even if the response is "failed".
Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

Good luck!
*/
function solve(s) {
   let v = []
   let c = []
   s=s.split``.sort((a,b)=>a.localeCompare(b))
   for (let i=0;i<s.length;i++){
     if (/[aeiou]/.test(s[i])) v.push(s[i])
     else c.push(s[i])
   }
   let str = ''
   for (let i=0,k=0,z=0;i<v.slice().length+c.slice().length;i++){
     if (i%2==0) str+=v[k++]
     else str+=c[z++]
   }
   if (str.includes('undefined')) {
   str = ''
   for (let i=0,k=0,z=0;i<v.slice().length+c.slice().length;i++){
     if (i%2==0) str+=c[k++]
     else str+=v[z++]
     }
     if (str.includes('undefined')) return 'failed'
     return str
   }
   return str
};
