/*
Description:
you need to create a method to make the serialization of a object to json esier. all the objects of the system needs to have a method toJson.

example:

   {"a" : 1 } == { a : 1}.toJson();
*/
Object.prototype.toJson=function()
{
  return JSON.stringify(this)
}
