/*
Description:
Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/

function odds(values){
  // arrow it
  return values.filter(x =>x%2!=0 );
}
