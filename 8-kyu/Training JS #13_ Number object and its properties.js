/*
Description:
Training JS #13:
Number object and its properties

The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:

var num=new Number(value);
Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:

var num=Number(value);
Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.

In addition to the above two, the Number objects have five attributes (or called constant):

1.MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

2.MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

3.NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.

Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call isNaN() to compare.

4.NEGATIVE_INFINITY: The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

5.POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

Ok, lesson is over. let's us do some task with Number objects.

#Task
Coding in function ```whatNumberIsIt```. function accept 1 parameter:```n```. it's a number.

To judge the number ```n```. If n is one of the above five constants, return one of these string:

```
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
```

Other values should return ```"Input number is xxx"```. xxx means this number.

For example:
```
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
```
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

function whatNumberIsIt(n){
  if (n===Infinity) return "Input number is Number.POSITIVE_INFINITY";
  else if (n===-Infinity) return "Input number is Number.NEGATIVE_INFINITY";
  else if (n==1.7976931348623157e+308) return "Input number is Number.MAX_VALUE";
  else if (isNaN(n)) return "Input number is Number.NaN";
  else if (n==5e-324) return "Input number is Number.MIN_VALUE";
  else return ("Input number is "+n);
}
