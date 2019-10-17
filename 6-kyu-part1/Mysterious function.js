/*
Description:
Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n) (or get_num(n) in ruby, python, or r). They tried to call it with some arguments. And finally they got this journal:

getNum(300) #-> returns 2
getNum(90783) #-> returns 4
getNum(123321) #-> returns 0
getNum(89282350306) #-> returns 8
getNum(3479283469) #-> returns 5
The archaeologists were totally stuck with this challenge. They were all in desperation but then.... came YOU the SUPER-AWESOME programmer. Will you be able to understand the mystery of this function and rewrite it?
*/
var getNum = function(n) {
  let count = 0;
  n.toString().split``.map(v => {
    v === "0" ? count++ : 1;
    v === "6" ? count++ : 1;
    v === "8" ? (count += 2) : 1;
    v === "9" ? count++ : 1;
  });
  return count;
};
