function sumDigits(num) {
return Math.abs(num).toString().split("").reduce((total,next)=>total+Number(next),0)
}
