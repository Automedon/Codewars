/*
Description:
This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
*/
function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			return i
		})
	}
	return res
}
