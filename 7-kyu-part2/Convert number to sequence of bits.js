/*
Description:
Define the toBits(minLength) function converting provided number to a sequence of bits. The default minimum length should be 8.

Examples
(0).toBits() === '00000000';
(7).toBits() === '00000111';
(128).toBits() === '10000000';
(255).toBits() === '11111111';

(0).toBits(0) === '0';
(7).toBits(2) === '111';
(128).toBits(4) === '10000000';
(255).toBits(4) === '11111111';
*/
Number.prototype.toBits = function(length=8) {
  return this.toString(2).padStart(length,'0');
}
