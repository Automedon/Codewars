/*
Description:
You're a banker and people are willing to deposit their money in your bank because of the high interest on deposits. However, this also attracts the attention of bank robbers.

You will receive an array of numbers representing the amount of money each person deposits with your bank. Each number is a deposit amount except zeroes and ones (0 and 1). A zero (0) means that your bank has been robbed and all money are lost while one (1), on the other hand, indicates that the police has caught the robbers and the money stolen are returned to the bank’s vault.

Your task is to write a program that returns the amount of money left in the bank after the last number in the array.

Note: There will only be a maximum of one robbery and one police action in each array to keep things simple and you don't have to worry about these.
*/
function bankRobbery(deposits) {
  let index0=deposits.indexOf(0)
  let index1=deposits.indexOf(1)
  if (index0>-1&&index1===-1){ 
  deposits=deposits.slice(index0)
  return deposits.reduce((a,b)=>a+b,0)
  }
  if (index1>-1){ 
     return deposits.reduce((a,b)=>a+b,0)-1
  }
  return deposits.reduce((a,b)=>a+b,0)
}
