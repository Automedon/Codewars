/*
Description:
The special score(ssc) of an array of integers will be the sum of each integer multiplied by its corresponding index plus one in the array.

E.g.: with the array [6, 12, -1]

arr =   [6,      12,       -1 ]
ssc =   1*6  +  2* 12 +  3.(*1) = 6 + 24 - 3 = 27
The array given in the example has six(6) permutations and are with the corresponding ssc:

Permutations      Special Score (ssc)
[6, 12, -1]      1*6 + 2*12 + 3*(-1) = 27
[6, -1, 12]       1*6 + 2*(-1) + 3*12 = 40
[-1, 6, 12]       1*(-1) + 2*6 + 3*12 = 47
[-1, 12, 6]       1*(-1) + 2*12 + 3*6 = 41
[12, -1, 6]       1*12 + 2*(-1) + 3*6 = 28
[12, 6, -1]       1*12 + 2*6 + 3*(-1) = 21
The total sum of the ssc's of all the possible permutations is: 27 + 40 + 47 + 41 + 28 + 21 = 204

The maximum value for the ssc is 47.

The minimum value for the ssc is 21.

We need a special function ssc_forperm() that receives an array of uncertain number of elements (the elements may occur more than once) and may output a list of dictionaries with the following data:

[{"total perm":__}, {"total ssc": ___}, {"max ssc": __}, {"min ssc": __}]
For the example we have above will be:

ssc_forperm([6, 12, -1]) = [{"total perm":6}, {"total ssc:204}, {"max ssc":47}, {"min ssc":21}]
You may assume that you will never receive an empty array.

Also you will never receive an array with the same element in all the positions like [1, 1, 1, 1 ,1], but you may have elements occuring twice or more like [1, 1, 1, 2, 3]

Enjoy it!!
*/
function sscForperm(arr){
  let a = [...new Set(permute(arr).map(v=>v.join`|`))].map(v=>v.split`|`.map(v=>v*1)).map(v=>v.reduce((a,b,i)=>a+(b*(i+1)),0 ));
  let totalPerm=a.length
  let totalSsc=0
  let maxSsc=-Infinity
  let minSsc=Infinity
  for (let i=0;i<a.length;i++){
    totalSsc+=a[i]
    if (maxSsc<a[i]) maxSsc=a[i]
    if (minSsc>a[i]) minSsc=a[i]
  }
  return [{'total perm':totalPerm}, {'total ssc':totalSsc}, {'max ssc':maxSsc}, {'min ssc':minSsc}];
}
function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}
