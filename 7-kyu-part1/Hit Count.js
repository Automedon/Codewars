function counterEffect(hitCount) {
let arr0=hitCount.split('')
let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];
for(let i=0;i<=arr0[0];i++)
{arr1.push(i)}
for(let i=0;i<=arr0[1];i++)
{arr2.push(i)}
for(let i=0;i<=arr0[2];i++)
{arr3.push(i)}
for(let i=0;i<=arr0[3];i++)
{arr4.push(i)}
return [arr1,arr2,arr3,arr4]
}
