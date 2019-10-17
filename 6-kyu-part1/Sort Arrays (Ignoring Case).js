/*
Description:
Simple sort, but this time sort regardless of upper / lower case.

So the input of

[ "Hello", "there", "I'm", "fine"]
is translated to

["fine", "Hello", "I'm", "there" ]
*/

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
 return names.sort((a,b)=>a.toLowerCase()>b.toLowerCase());
}
