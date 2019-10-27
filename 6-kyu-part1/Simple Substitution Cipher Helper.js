/*
Description:
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.
*/
function SubstitutionCipher(ab1, ab2) {
  this.encode = function(str) {
    return str
      .split("")
      .map(v => (ab1.includes(v) ? (v = ab1.indexOf(v)) : v))
      .map(v => (typeof v === "number" ? (v = ab2[v]) : v))
      .join(``);
  };
  this.decode = function(str) {
    return str
      .split("")
      .map(v => (ab2.includes(v) ? (v = ab2.indexOf(v)) : v))
      .map(v => (typeof v === "number" ? (v = ab1[v]) : v))
      .join(``);
  };
}
