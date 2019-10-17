/*
Description:
Aspect-oriented programming (AOP) is programming that adds additional behavior (advice) to existing functionality without actually modifying that functionality.

Create a method called adviseBefore. This method will take two arguments, a function (target) and the advising function (advice).

adviseBefore should return a function that, when executed, will first execute the advising function and then the original method with the following conditions:

The arguments passed to the function that adviseBefore returns should be passed to the advising function.
If the advising function returns an array, the array should replace the arguments passed to the original method.
If the advising function does not return an array, the original arguments should be passed to the original method.
The return value of the original method should be returned.
*/
function adviseBefore(target, advice) {
  return function(...args) {
    return Array.isArray(advice(...args))?target(...advice(...args)):target(...args);
  }
}
