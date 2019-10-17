/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function singSong(a,b){
  if (a===b) return `I have two ${a}s.`
  if (b){
  return `Uhh! ${a[0].toUpperCase()+a.slice(1)}-${b}!`
  }
  if (/[aeiou]/.test(a[0])){
  return `I have an ${a}.`
  }
  return `I have a ${a}.`
}
