/*
Description:
For this kata you need to return the provided array, with the same length as provided, but with some of the values copied, and that copied section duplicated over another section. An example should help:

You will be given an array, a start and stop index for the 'copy', and an index to insert it to.

For example function copy(array, start, stop, place){}

where:

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; start = 5; stop = 8; place = 2;

In this example, the copy bit begins at (and includes) index 5. So, the first value copied is 6. The copy stops at (and does not include) index 8, and so includes all values up to and including 8 (index 8 is '9' and is not included).

This means the copied element is [6, 7, 8];

You now have to put this copied element into the array at the index specified by 'place'. Note the copied bit also remains at it's original location, hence 'copy', not 'move'. When inserted, the copied elements overwrite others in the array so that the length does not increase.

so in this example [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; becomes: [1, 2, 6, 7, 8, 6, 7, 8, 9, 10];

[1, 2, (6, 7, 8), 6, 7, 8, 9, 10]; <- brackets for highlighting insertion only

Makes sense? Give it a go... hint... there is an array method that is very helpful for this job.
*/
function copy(array, start, stop, place){
  return array.copyWithin(place,start,stop)
};
