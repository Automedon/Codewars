function splitTheBill(x) {
let average =Object.values(x).reduce((a,b)=>a+b,0)/Object.values(x).length;
let arr=Object.keys(x);
let arr2=Object.values(x).map((a,b)=>(a-average));
return Object.assign(...arr.map((n, i) => ({ [n]: parseFloat((arr2[i]).toFixed(2)) })));
}
