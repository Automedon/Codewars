/*
Help Musashi fix the function for counting the power of a number
*/
function pow(n, p){
		return p ? n * pow(n, p-1) : 1;
}
