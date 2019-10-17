function add(...arg) {
 return arg.map((v,i)=>v*(i+1)).reduce((a,b)=>a+b,0)
}
