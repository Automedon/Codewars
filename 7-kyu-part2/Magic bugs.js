/*
Description:
There are some bug in this code. If you fix it, the function will return an object.
*/
function magic(input)
{
  if (typeof input !== 'string'){
    return {
        bar: "hello"
    };
  }
  else{
    return {
        bar: "world"
    };
  }
}
