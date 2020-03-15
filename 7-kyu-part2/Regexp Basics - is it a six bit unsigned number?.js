/*
Description:
Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/
String.prototype.sixBitNumber = function() {
  if (this!= parseInt(this)) return false
  for (let i=0;i<64;i++){
    if (i===parseInt(this)&&this.length===i.toString().length) {
      return true
    }
  }
  return false
}
