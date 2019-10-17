/*
Description:
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5]

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

return 2;
*/

const catchSignChange = arr =>{
let count=0;
let a=arr.map((v,i,arr)=>(v>=0&&arr[i+1]<0)||(v<0&&arr[i+1]>=0)?count++:count)

return count
}
