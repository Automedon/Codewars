/*
Description:
Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example:

roundToFive([34.5, 56.2, 11, 13]);
should return

[35, 55, 10, 15]
*/
function roundToFive(numbers){
  return numbers.map(v=>{
  v=Math.round(v)
  let str=[...(''+v)].pop()*1;
  if (str===9){
    return v+1
  }if (str===8){
    return v+2
  }if (str===7){
    return v-2
  }if (str===6){
    return v-1
  }if (str===5){
    return v+0
  }if (str===4){
    return v+1
  }if (str===3){
    return v+2
  }if (str===2){
    return v-2
  }if (str===1){
    return v-1
  }if (str===0){
    return v+0
  }  
  
  })
}
