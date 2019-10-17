/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #16:
Warning of map

Task
Complete function `warning`, accept an array `arr` and a function `func` as arguments. if the funtion can be used for the `array.map()`, return `"Passed!"`. If not, return `"Failed!"`.
Examples
arr=[1, 2, 3]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[1, 2, 3]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[true,false,true]  func = x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[1,"2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x.noSuchAFunction()
warning(arr,func)  ===  "Failed!"
*/
function warning(arr, func) {
  try {
    arr.map(v => func(v));
    return "Passed!";
  } catch (e) {
    return "Failed!";
  }
}
