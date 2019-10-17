/*
Description:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given two string s1 and s2. You need to perform the following operations: Compare each character of s2 with s1. If s1 contains the character, remove it; If not, append it to s1. After these remove or append operations, if the characters of s1 are same as "Merry Christmas!"(order can be different), return true; Otherwise, return false. For example:

 var s1="abcMerry Christmas!",s2="abc"
 merryChristmas(s1,s2) === true

 var s1="abcerry hristmas!",s2="abcMC"
 merryChristmas(s1,s2) === true

 var s1="abcMerry Christmas!",s2="bad"
 merryChristmas(s1,s2) === false
*/
function merryChristmas(s1,s2){
  let check = 'Merry Christmas!'.split``.sort().join``
  for (let i=0;i<s2.length;i++){
    let a=new RegExp(`${s2[i]}`)
    if (s1.includes(s2[i])){
      s1=s1.replace(a,'')
    } else{
      s1+=s2[i]
    }
  }
  return  check===s1.split``.sort().join``
}
