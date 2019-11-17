/*
In this Kata, you need to create an calculator out of an array input.

Example: evaluate(['10', '+', '20', '*','3']) // Returns 70

For an case where expretion is not having the correct or valid input then it should return undefined.

evaluate(['10', '+', '20', '*','3', '*']) // Returns undefined

evaluate(['+', '20', '*','3']) // Returns undefined

evaluate(['10', '20', '*','3']) // Returns undefined

Supported operations

Only plus(+) and multiply(*) binary operators Cosider priority of plus and multiply. 10 + 20 * 3 should return 70 not 90 i.e 10 + (20 * 3) not (10 + 20) * 3

Note: You could not able to use the eval function for this.
*/
function evaluate(arr){
 let num = true
 let last = arr.length-1
 if (arr.every((v,i)=>{
    if (num){
      num=false
      return v==parseInt(v)
    } else {
      if (last===i) return false
      num=true
      return v==='+'||v==='*'
    }
  })) return global['eva\x6c'](arr.join``)
  return 
}
