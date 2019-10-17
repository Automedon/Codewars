/*
Description:
You are given an array of documents (strings), a term (string), and two booleans finetuning your indexing operation. Return an array containing the document IDs (1-based indices of documents in the array), where the term occurs, sorted in ascending order.

Booleans:

CaseSensitive: test matches test, but not Test
Not CaseSensitive: test matches both test and Test

Exact Match: test matches test and .test!, but not attest or test42
Not Exact Match: test matches both test and attest

Example:
buildInvertedIndex(["Sign", "sign", "Signature", "Sign-ature"], "Sign", true, true)

return [1,4]
NLP-Series:
Part 1: Inverted Index</a href>
*/
const buildInvertedIndex = (c, t, s, e) => Object.keys(c).filter(i => new RegExp(e?"\\b"+t+"\\b":t,s?"":"i").test(c[i])).map(a=>+(a)+1) 
