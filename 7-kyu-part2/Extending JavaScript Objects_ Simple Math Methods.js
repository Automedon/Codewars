/*
Description:
Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), so you can perform simple mathematical operations on numbers just like this:

var n = 25;

n.add(4);  // 29   (addition)
n.sub(3);  // 22   (subtraction)
n.mul(2);  // 50   (multiplication)
n.div(5);  // 5    (division)
n.pow(2);  // 625  (power)
n.sqr();   // 5    (square root)
Also, you should be able to fluently chain these methods:

var n = 25;

n.add(5).div(2).mul(3).sub(35).pow(2).sqr();  // 10
*/
Number.prototype.add=function(x){
  return this+x
}
Number.prototype.sub=function(x){
  return this-x
}
Number.prototype.mul=function(x){
  return this*x
}
Number.prototype.div=function(x){
  return this/x
}
Number.prototype.pow=function(x){
  return Math.pow(this,x)
}
Number.prototype.sqr=function(){
  return Math.sqrt(this)
}
