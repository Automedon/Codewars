/*
Description:
#Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
function sortCsvColumns(c) {
  let arr = []
  c=c.split`\n`.map(v=>v.split`;`)
  for (let i=0;i<c[0].length;i++){
    let temp = []
    for (let j=0;j<c.length;j++){
      temp.push(c[j][i])
    }
    arr.push(temp)
  }
  arr.sort((a,b)=>a[0].localeCompare(b[0])) 
  let arr2 = []
  for (let i=0;i<arr[0].length;i++){
    let temp = []
    for (let j=0;j<arr.length;j++){
      temp.push(arr[j][i])
    }
    arr2.push(temp)
  }
  return arr2.map(v=>v.join`;`).join`\n`
}
