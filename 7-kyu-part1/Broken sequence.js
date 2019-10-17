function findMissingNumber(sequence){
  if(sequence === ""){
    return 0;
  }
 else if (!/^(\d+ )+\d+$/gi.test(sequence)){
   return 1;
  }
  else{
  var arr = sequence.split(' ').map(x => +x);
  var max = Math.max(...arr);
  for(var i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined)
    return i;
  return 0;
  
  
  }
}
