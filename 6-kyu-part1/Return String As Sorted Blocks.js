/*
Description:
Task
You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character.

The hierarchy is:

lowercase letters (a - z), in alphabetic order
uppercase letters (A - Z), in alphabetic order
digits (0 - 9), in ascending order
Examples
"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
"" -> "" - an empty input should result in an empty output
Good luck!
*/
function blocks(s) {
  const obj = s.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  const len = Object.values(obj).reduce((a,b)=>a+b,0)
  const arr = Array(len).fill('')
  for (let i=0;i<len;i++){
    for (let k in obj){
      if (obj[k]>0&&!arr[i].includes(k)){
        arr[i]+=k
        obj[k]-=1
      }
    }
  }
  return arr.map(v=>{
    const az = v.replace(/[^a-z]/g,'').split``.sort().join``
    const AZ = v.replace(/[^A-Z]/g,'').split``.sort().join``
    const n = v.replace(/[^0-9]/g,'').split``.sort().join``
    return az+AZ+n
  }).filter(v=>v!=='').join`-`
}
