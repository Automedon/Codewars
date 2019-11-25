/*
Description:
#Split all even numbers to odd ones in different ways

Your task is to split all even numbers from an array to odd ones. So your method has to return a new array with only odd numbers.

For "splitting" the numbers there are four ways.

0 -> Split into two odd numbers, that are closest to each other.
     (e.g.: 8 -> 3,5)
1 -> Split into two odd numbers, that are most far from each other.
     (e.g.: 8 -> 1,7)
2 -> All new odd numbers from the splitting should be equal and the maximum possible number.
     (e.g.: 8 -> 1, 1, 1, 1, 1, 1, 1, 1)
3 -> Split into 1s.
     (e.g.: 8 -> 1, 1, 1, 1, 1, 1, 1, 1)
The new numbers (from the splitting) have always to be in ascending order.
So in the array every even number is replaced by the new odd numbers from the splitting.
Your method will get as parameters the input-array and the number of the way for splitting the even numbers.

Some Examples

[1,10,1,3],0 -> [1,5,5,1,3]
[1,10,1,3],1 -> [1,1,9,1,3]
[1,10,1,3],2 -> [1,5,5,1,3]
[1,10,1,3],3 -> [1,1,1,1,1,1,1,1,1,1,1,1,3]

[1,1,3,8],0 -> [1,1,3,3,5]
[1,1,3,8],1 -> [1,1,3,1,7]
[1,1,3,8],2 -> [1,1,3,1,1,1,1,1,1,1,1]
[1,1,3,8],3 -> [1,1,3,1,1,1,1,1,1,1,1]
The array will never be null and will always contain only integer numbers > 0. Also your result-array must contain only integer numbers > 0. The way-parameter will always be between inclusive 0 and inclusive 3 (0,1,2,3).

You must not change the input-array!




Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function splitAllEvenNumbers(numbers, way)
{
  let arr = []
  if (way===0){
  for (let i=0;i<numbers.length;i++){
    if (numbers[i]%2!==0) arr.push(numbers[i])
    else {
      if ((numbers[i]/2)%2!==0) arr.push(numbers[i]/2,numbers[i]/2)
      else arr.push(numbers[i]/2-1,numbers[i]/2+1)
    }
  }
  return arr
  }
  if (way===1){
    for (let i=0;i<numbers.length;i++){
    if (numbers[i]%2!==0) arr.push(numbers[i])
    else {
     arr.push(1,numbers[i]-1)
    }
  }
  return arr  
  }
  if (way===2){
  for (let i=0;i<numbers.length;i++){
    if (numbers[i]%2!==0) arr.push(numbers[i])
    else {
      if ((numbers[i]/2)%2!==0) arr.push(numbers[i]/2,numbers[i]/2)
      else {
        for (let z=numbers[i];z>0;z--){
          if (z%2!==0&&numbers[i]%z===0){
            if (z===1){
                    for (let j=0;j<numbers[i];j++){
                arr.push(1)
              }
            } 
            else{
            for (let a=0;a<=z;a++){
              arr.push(z)
            }}
            break
          }
        }
      }
    }
  }
  return arr
  }
  for (let i=0;i<numbers.length;i++){
    if (numbers[i]%2!==0) arr.push(numbers[i])
    else {
      for (let j=0;j<numbers[i];j++){
        arr.push(1)
      }
    }
  }
  return arr
}
