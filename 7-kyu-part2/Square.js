/*
Square
Given an array of positive integers, find if the sum of the integers in the array is a perfect square. If it is a perfect square, return the square root, otherwise return the sum. If an empty array is passed, return 0. To improve your problem solving experience, use the suggested functions to solve the problem.

Concepts
Javascript Functions(forEach, Math)

Suggested Functions

forEach()
arrayName.forEach(function callback(currentItem){              
    //your iterator           
})     
The forEach() method executes a provided function once for each array element.

var arr = ['I', 'study', 'at', 'Bloc'];
arr.forEach(function(element) {
    console.log(element);
});
// The above code would print, 'I', 'study', 'at', 'Bloc', to the console.
Math.sqrt()
Math.sqrt(number)           
The Math object allows you to perform mathematical tasks such as finding the square root of a number.

Math.sqrt(25) // Returns the square root of 25 which is 5
Math.sqrt(2) // Returns the square root of 2 which is approximately 
*/
function squareRoot(numbers){
    let sum=numbers.reduce((a,b)=>a+b,0)
    return Math.sqrt(sum)%1===0?Math.sqrt(sum):sum
}
