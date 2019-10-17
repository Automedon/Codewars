/*
Description:
Write a function that calculate factor for a given number. Return empty array if null value given.

Example: 12 = [1,2,3,4,6,12]
Note: 0 < n <= 10000000
*/
function factor(n){
    let arr = [];
    for (let i=1;i<=n;i++){
    if (n%i===0) arr.push(i)
    }
    return arr;
}
