/*
Description:
A number system with moduli is deﬁned by a vector of k moduli, [m1,m2, ···,mk].

The moduli must be pairwise co-prime, which means that, for any pair of moduli, the only common factor is 1.

In such a system each number n is represented by a string "-x1--x2-- ... --xk-" of its residues, one for each modulus. The product m1 * ... * mk must be greater than the given number n which is to be converted in the moduli number system.

For example, if we use the system [2, 3, 5] the number n = 11 is represented by "-1--2--1-",
the number n = 23 by "-1--2--3-".

If we use the system [8, 7, 5, 3] the number n = 187 becomes "-3--5--2--1-".

You will be given a number n (n >= 0) and a system S = [m1,m2, ···,mk] and you will return a string "-x1--x2-- ...--xk-" representing the number n in the system S.

If the moduli are not pairwise co-prime or if the product m1 * ... * mk is not greater than n, return "Not applicable".

Examples: (you can add them in the "Sample tests")

fromNb2Str(11, [2,3,5]) -> "-1--2--1-"

fromNb2Str(6, [2, 3, 4]) -> "Not applicable", since 2 and 4 are not coprime
fromNb2Str(7, [2, 3]) -> "Not applicable" since 2 * 3 < 7
*/
function fromNb2Str(n, sys) {
  if (sys.reduce((a, b) => a * b, 1) < n || sys.length % 2 !== 0)
    return "Not applicable";
  return sys.map(v => "-" + (n % v) + "-").join``;
}
