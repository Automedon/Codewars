/*
Description:
Create a function that will allow you to pass in a string, with the ability to add to this with more function calls. When it is finally passed an empty argument return the full concatinated string of all arguments pased previously.

For example: createMessage("Hello")("World!")("how")("are")("you?")();

This will return the following: "Hello World! how are you?"
*/
function createMessage(str) {
  return str1 => {
    if (str1 === undefined) return str;
    return createMessage(str + " " + str1);
  };
}
