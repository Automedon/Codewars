/*
Description:
Old Greg likes to count his 31 fish on just one hand.

To do this he holds his right hand up, palm facing toward him, fist closed and then counts in binary using his fingers.

First he sticks his thumb out which makes 1, then just his index finger which makes 10 (decimal 2), then Index and thumb which makes 11 (decimal 3), then just his middle finger which makes 100 (decimal 4) and so on up to all five fingers out which makes 11111 (decimal 31).

Incidentally this is why when Old Greg is annoyed with you he says: Just let me count to 4 in binary (a joke only for IT people I think!).

You need to create a function: binaryFingers into which will be passed a string of 1s and 0s, it should return an array showing which of Old Greg's digits which are up, left to right, as Old Greg sees them:

so:

BinaryFingers.GetFingers("101") should return {"Middle", "Thumb"}

BinaryFingers.GetFingers("11111") should return {"Pinkie", "Ring", "Middle", "Index", "Thumb"}

You can be sure that the input parameter string will never contain more than 5 digits (although this wouldn't work for Old Greg's friend Lucky Bob who has six fingers and can count to 63).

An empty string should return an empty array.
*/
function binaryFingers(binString) {
  const fingers = ['Pinkie','Ring','Middle','Index','Thumb'];
  let f = '0'.repeat(5-binString.length)+binString;
  let ans = [];
  f.split(``).map((v,i)=>v==='1'?ans.push(fingers[i]):v)
  return ans
}
