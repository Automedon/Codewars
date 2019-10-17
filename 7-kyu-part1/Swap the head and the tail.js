/*
Description:
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

    [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
     \----/   \----/         
      head     tail 

    [ -1, 2 ]  => [ 2, -1 ] 
    [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
*/
function swapHeadAndTail(arr) {
  const head = arr.slice(0,Math.round((arr.length-1)/2))
  const tail = arr.slice(Math.round(arr.length/2),arr.length)
  const center = arr.slice(Math.round((arr.length-1)/2),Math.round(arr.length/2))
  return [].concat(tail,center,head)
}
