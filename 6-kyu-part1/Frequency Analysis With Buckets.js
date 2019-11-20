/*
Description:
Description:

Given an input array (arr) of positive integers, the objective is to return an output array where each index represents the amount of times an element appeared (frequency) in the input array.

More specifically, the element at each index of the output array will be an array (bucket) containing integers that appeared index-amount-of-times.

Otherwise, slot nulls (JavaScript, Java), None's (Python) nils (Ruby), or NULL's (C/C++) where appropriate. A valid array will always be provided.

If an array of [1,2,3,4,4,5,5,5] is passed in, the expected output should be: [null, [1,2,3], [4], [5], null, null, null, null, null].

Explanation:

// bucketize(arr) ======> outputArray
bucketize([1,2,3,4,4,5,5,5]) ======> [null, [1,2,3], [4], [5], null, null, null, null, null]
An element cannot appear 0 times, so a null is placed at outputArray[0]. The elements 1, 2, and 3 appear once. This is why they are located at outputArray[1]. Notice the elements are grouped together in an array and sorted in ascending order. The element 4 appears twice. This is why it is located at outputArray[2]. The element 5 appears three times. This is why it is located at outputArray[3].

Although an integer could have possibly appeared four, five, six, seven, or eight times, this is not the case for this particular example. This is the reason why the elements at outputArray[4], outputArray[5], outputArray[6], outputArray[7], and outputArray[8] are all null values.

Examples:

bucketize([2,2,4,4,6,6,9,9,9,9]) ===> [null, null, [2,4,6], null, [9], null, null, null, null, null, null];
bucketize([3,3,3,3,2]) =============> [null, [2], null, null, [3], null];
bucketize([5,5,5,5,5]) =============> [null, null, null, null, null, [5]];
bucketize([77,3,40,40,40]) =========> [null, [3,77], null, [40], null, null];
bucketize([16,7,5,3,6,23]) =========> [null, [3,5,6,7,16,23], null, null, null, null, null];
*/
function bucketize(arr) {
  let o = arr.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let a = []
  for (let i=0;i<=arr.length;i++){
    let temp = []
    for (let k in o){
      if (o[k]===i){
        temp.push(k*1)
      }
    }
    temp.length>0?a.push(temp):a.push(null)
  }
  return a
}
