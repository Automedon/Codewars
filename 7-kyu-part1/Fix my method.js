/*
Description:
I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation.
*/

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function objMethod() {
      return myObject.objProperty;
    }
  };

  return myObject;
}
