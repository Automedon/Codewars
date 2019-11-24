/*
Description:
Implement String#to_integer, which should return Integer if object is in one of formats specified below, or nil otherwise:

Optional - or +
Base prefix 0b (binary), 0x (hexadecimal), 0o (octal), or in case of no prefix decimal.
Digits depending on base
Any extra characters, including whitespace, make number invalid, in which case you should return nil.

Digits are case insensitive, but base prefix must be lower case.
*/
String.prototype.toInteger=function(){
  let s = this
  if (s[0]==='-'){
    if (s[2]==='o'&&!/[89]/g.test(s)) return parseInt(s.slice(3),8)*-1
    if (s[2]==='x') return parseInt(s,16)
    if (s[2]==='b'&&!/[2-9]/g.test(s)) return parseInt(s.slice(3),2)*-1
    if (!/\D/g.test(s.slice(1))) return s*1
    return null
  } else {
    if (s[0]==='+') s=s.slice(1)
    if (s[1]==='o'&&!/[89]/g.test(s)) return parseInt(s.slice(2),8)
    if (s[1]==='x') return parseInt(s,16)
    if (s[1]==='b'&&!/[2-9]/g.test(s)) return parseInt(s.slice(2),2)
    if (!/[\D]/g.test(s)) return s*1
    return null
  }
}
