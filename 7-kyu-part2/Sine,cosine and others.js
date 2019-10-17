/*
Given value of sine,implement function which will return sine,cosine,tangent,and cotangent in list. order must be same as in the description and every number must be rounded to 2 decimal places.If tangent or cotangent can not be calculated just don't contain them in result list.

Trygonometry - https://en.wikipedia.org/wiki/Trigonometry
*/
function sctc(sin){
  let cos=Math.sqrt(1-sin*sin)
  let tan=sin/cos
  let cot=1/tan
  if (sin===1) return [1, 0.0, 0.0]
  if (sin===0) return [0.0, 1, 0.0]
  return [Math.round((sin)*100)/100,Math.round((cos)*100)/100,Math.round((tan)*100)/100,Math.round((cot)*100)/100]
}
