/*
Description:
Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
Note: The order of the elements should be preserved in the resulting array.
*/
Array.prototype.only = function(keys)
{
    keys=keys.sort((a,b)=>a-b)
    let arr= [];
    for (let i=0;i<keys.length;i++)
    {
      arr.push(this[keys[i]])
    }
    return arr
}
