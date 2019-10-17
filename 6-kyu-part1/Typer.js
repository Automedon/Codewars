/*
Description:
Type checking in JavaScript
Sometimes it could be a good thing to check if an object is of a type T. Lets see this example:

function doStuff(thing) {
  return thing.map(function(item) {
    return item * 2;
  });
}
If we call this function with an array, we get the expected result

doStuff([1,2,3]) //Array [ 2, 4, 6 ]
But if someone calls doStuff (ruby do_stuff) with a different type of argument, it will throw an exception, because most likely the argument object won't have a method map defined on it.

doStuff(3) //TypeError: thing.map is not a function
Apart from this, having methods like isArray (ruby Typer.is_array? obj), or isString (ruby Typer.is_string? obj) can rise readability when validating input arguments, and clears things up for fellow co-workers.

Your task will be to create a basic type-checker "framework/api" for JavaScript (or for Ruby). Let's call it typer.js (ruby Typer class). Your API must contain the following methods:

isNumber (ruby is_number?)
isString (ruby is_string?)
isArray (ruby is_array?)
isFunction (ruby do not implement this)
isDate (ruby is_time?)
isRegExp (ruby is_regexp?)
isBoolean (ruby is_boolean?)
isError (ruby is_exception?)
isNull (ruby is_nil?)
isUndefined (ruby is_nil?)
Create these utility methods for input validation. For example, if the argument is a number, then isNumber called with this argument should return true.

Example
assert.equal(typer.isNumber(5), true);
assert.equal(typer.isString({}), false);
Note
If you are stuck, feel free to check how known utility libraries do the exact same thing. Check them on GitHub ;)

Motivation
Possibly after this kata the warriors who just started to learn JavaScript will learn that sometimes the conventional ways of type checking in JavaScript in not sufficient enough, since, for example, not only "simple" numbers are considered as numbers, but numbers created by Number constructors, etc.

This kata has also been translated to Ruby
*/
var typer = (function(TO_BE_DEFINED_BY_YOU) {
  return {
    isNumber:(TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU.valueOf() === "number"&&!isNaN(TO_BE_DEFINED_BY_YOU),
    isString:(TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='string'||TO_BE_DEFINED_BY_YOU instanceof String,
    isArray: (TO_BE_DEFINED_BY_YOU)=>Array.isArray(TO_BE_DEFINED_BY_YOU),
    isFunction: (TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='function',
    isDate: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof Date,
    isRegExp: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof RegExp,
    isBoolean: (TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='boolean'||TO_BE_DEFINED_BY_YOU instanceof Boolean,
    isError: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof Error,
    isNull: (TO_BE_DEFINED_BY_YOU)=>TO_BE_DEFINED_BY_YOU ===null,
    isUndefined: (TO_BE_DEFINED_BY_YOU)=>TO_BE_DEFINED_BY_YOU ===undefined
  };
}(null));
