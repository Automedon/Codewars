/*
Description:
JavaScript is a dinamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);    //returns number=2
typing(true); //returns boolean=true
*/
function typing(param) {
  if (typeof param === "undefined") return `undefined`;
  if (typeof param === "string") return `${typeof param}="${param}"`;
  if (typeof param === "function") return `${typeof param}=${param}`;
  return `${typeof param}=${JSON.stringify(param)}`;
}
