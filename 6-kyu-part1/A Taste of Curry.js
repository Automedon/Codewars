/*
Description:
Your relative have decided to open a small Indian restaurant, and so she bought an automatic cooker. It publishes an API function

function cook(
    /*String*/ dish,
    /*Number*/ nServings
    /* , other params, specific to the dish - represented by strings */
) {
    ...
}```

 which takes an amount of servings, dish name and several other parameters which can vary per dish (yes, this is a very advanced cooking machine).

The restaurant instantly became very popular, and your relative noticed that most people order some curry with additional ingredients - because she was already tired to repeatedly type the word _'curry'_  when making a request to cooker. So she decided to ask for your help.

She cannot lend you her cooker, because it is in constant use - so she needs you to write a function

```javascript
function curry(fun, /*args*/) { 
    ...
}
which takes another function fun and an arbitrary number of other arguments - and returns a function, which works like fun with the first arguments replaced by the remaining arguments of curry.

For example

function add(a, b, c) { return a+b+c; }
var addOne = curry(add , 1);

add(1, 2, 3) === addOne(2, 3);
And one more thing - some code warrior who was having a snack at your relative's restaurant told her that there is such thing as execution context, and that the cook function might rely on it somehow - it is designed to work exclusively with cooking machine after all.

So another request for curry function is that if the resulting function is invoked with context ctx the original function inside it should also be invoked with context ctx

For example,

var obj = {
  a: 'foo',
  b: function (a) { return this.a + a; }
}

obj.foobar = curry(obj.b, 'bar');
obj.foobar() //should return foobar
*/
function curry(fun,...args) {
    return function(...arg2) {
    return fun.call(this,...args,...arg2);
  }
}
