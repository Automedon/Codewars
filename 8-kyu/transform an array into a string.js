/*
Description:
A simple kata, my first.
simply tranform an array into a string, like so:

  transform([4, -56, true, "box"]) => "4-56truebox"
have fun coding!
*/
function transform(array) {
	return array.map(v=>v===null?'null':v).join``
}
