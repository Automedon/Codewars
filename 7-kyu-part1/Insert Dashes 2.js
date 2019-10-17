/*
Description:
This is a follow up from my kata Insert Dashes. 
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num 
For example: 
insertDashII(454793) --> 4547-9-3 
insertDashII(1012356895) --> 10123-56*89-5 

Zero shouldn't be considered even or odd.
*/
function insertDashII(num) {
   num=num.toString().split('')
   const arr=[];
   for (let i=0;i<num.length;i++)
   {arr.push(num[i])
   if (num[i]%2===0&&num[i+1]%2===0&&num[i]!=='0'&&num[i+1]!=='0'){arr.push('*')}
   if (num[i]%2!==0&&num[i+1]%2!==0&&num[i+1]!==undefined){arr.push('-')}
   }
   return arr.join('')
   }
