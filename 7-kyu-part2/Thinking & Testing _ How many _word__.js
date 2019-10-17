/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(s){
  let count1=0;
  let count2=0;
  for (let i=0;i<s.length;i++){
    if ((s[i]==='w'||s[i]==='W')&&count1===0){
      count1++
      count2+=0.25
    }
    if ((s[i]==='o'||s[i]==='O')&&count1===1){
      count1++
      count2+=0.25
    }
    if ((s[i]==='r'||s[i]==='R')&&count1===2){
      count1++
      count2+=0.25
    }
    if ((s[i]==='d'||s[i]==='D')&&count1===3){
      count1=0
      count2+=0.25
    }
  }
  return Math.floor(count2)
}
