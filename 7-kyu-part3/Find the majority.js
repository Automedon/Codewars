/*
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/

function majority(arr) {
  const res = arr.reduce((a,b)=>(a[b]?a[b]+=1:a[b]=1,a),{});
  const max = Math.max(...Object.values(res));
  const filtered = Object.entries(res).filter(v=>v[1]===max);
  return filtered.length === 1 ? filtered[0][0] : null;
}
