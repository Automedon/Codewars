/*
Description:
This is the first part of this kata series. Second part is here and third part is here

Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten"
  //c++
  Arith* k = new Arith("three");
  k->add("seven"); //this should return string "ten"
  //Rust
  let c = Arith{value: "three"};
  c.add("seven") // this should return &str "ten"
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case
*/
class Arith{
   constructor(name){
     this.name=name;
     }
  add(name){
  const obj={'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,
  'nine':9,'ten':10,'eleven':11,'twelve':12,'thirteen':13,'fourteen':14,
  'fifteen':15,'sixteen':16,'seventeen':17,'eighteen':18,'nineteen':19,'twenty':20}
 return Object.keys(obj)[obj[this.name]+obj[name]]
 }
}
