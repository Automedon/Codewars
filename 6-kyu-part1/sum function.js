/*
Description:
Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT : use closures
*/
function sum(a,b) {
	if(b===0||b) return a + b
	return (c)=> a + c
}
