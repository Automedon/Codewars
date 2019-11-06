/*
Description:
You team thanks you for the addition of times for numbers, and because you did such a great job, have asked you to write a delete method for the String object.

String.delete()
In Ruby, you can delete characters of a string like so:

"hello".delete("l") -> "heo"
We're going to beef the delete method up a little bit for javascript. 1st, we're going to allow multiple arguments, and we're going to accept strings and regular expressions. String arguments will remove all occurences of the substring. Unlike the string arguments, Regular Expressions must use the global flag to delete all occurences. Invalid arguments should be ignored. Any matches should be removed from the returned string.

Examples:

"1: Are you enjoying this kata?".delete(/[^a-z ]/gi) -> " Are you enjoying this kata"
"1: Are you enjoying this kata?".delete("a", "?", [], /[0-9]/g) -> ": Are you enjoying this kt"
*/
String.prototype.delete = function(...args) {
  let str = this.toString()
  args.map(v=>{
    if (typeof v === 'string'){
      return str=str.replace(new RegExp(v,'g'),'')
    }
    if (v instanceof RegExp){
      return str=str.replace(v,'')
    }
  })
  return str;
};
