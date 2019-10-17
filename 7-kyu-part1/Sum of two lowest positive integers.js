function sumTwoSmallestNumbers(numbers) {  
  let a=numbers.sort((a,b)=>a-b)
  return a[0]+a[1]
};
