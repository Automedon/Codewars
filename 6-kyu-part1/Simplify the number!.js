/*
Description:
Task
Given a positive integer as input, return the output as a string in the following format:

Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

Examples
Input	Output
0	""
56	"5*10+6"
60	"6*10"
999	"9*100+9*10+9"
10004	"1*10000+4"
Note: input >= 0
*/
function simplify(number){
  let str = number.toString().split``.reverse().map(Number)
  const obj = {}
  for (let i=0;i<str.length;i++){
    !obj[i]?obj[i]=[i,0]:null
    while(str[i]!==0){
      obj[i][1]+=1
      str[i]-=1
    }
  }
  const arr = []
  for (let i in obj){
    let str = obj[i][1]+''
    let once = true
    while(obj[i][0]){
      if (once){
        str+='*1'
        once = false
      } else {
        str+='0'
        obj[i][0]-=1
      }
    }
    str[0]!=='0'&&arr.push(str)
  }
  return arr.reverse().join`+`
}
