/*
Description:
For this Kata you will have to forget how to add two numbers together.

The best explanation on what to do for this kata is this meme:

caf

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
*/
function add(num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()
  let arr = []
  const l1 = num1.length-1
  const l2 = num2.length-1
  for (let i=0;;i++){
    if (num1[l1-i]&&num2[l2-i]){ 
      arr.push(parseInt(num1[l1-i])+parseInt(num2[l2-i]))
    }
    else if (num1[l1-i]){
      arr.push(num1[l1-i])
    }
    else if (num2[l2-i]){
      arr.push(num2[l2-i])
    } else {
      break
    }
  }
  return arr.reverse().join('')*1
}
