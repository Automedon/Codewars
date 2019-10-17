/*
Description:
Coding 3min: Are they symmetrical?

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

#Task:
Give you an ```obj```, it can be 3 types: string, number and number array, Check that they are symmetrical or not, return a boolean value.    
#Example:
```
obj=""    return true   (Empty string should return true)
obj="1"   return true   (one char should return true)
obj="11"  return true
obj="12"  return false
obj="121" return true
obj=1     return true   (number<10  should return true)
obj=-1    return false  (negative number should return false)
obj=10    return false
obj=11    return true
obj=12    return false
obj=121   return true
obj=[]    return true  (Empty array should return true)
obj=[1]   return true  (an array with one element should return true)
obj=[1,2,3,4,5]      return false  
obj=[1,2,3,2,1]      return true
obj=[11,12,13,12,11] return true   (left element = right element)
obj=[11,12,21,11]    return false  (not verify them as a string)
*/
function sc(obj){
  obj=obj.toString().replace(/[^\d-,]/gi,'')
  if (obj.includes(',')){
  return obj===obj.split(',').reverse().join(',')
  }
  return obj===obj.split('').reverse().join('')
}
