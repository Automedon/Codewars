/*
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #32:
Count with your fingers

Description
John's each hand has five fingers(If you are surprised, please tell me how many fingers you have ;-) Even more amazing is that when he was a child, he already had 5 fingers(one hand). At that time, he often to count the number by using his fingers.

He counting number by this way:

a--Thumb b--Index finger c--Middle finger
d--Ring finger e--Little finger

      a  b  c  d  e
      H  H  H  H  H
      H  H  H  H  H
      U  H  H  H  H
         U  H  U  U
            U

      1  2  3  4  5
      9  8  7  6
        10 11 12 13
     17 16 15 14
        18 19 .. ..
     .. .. .. .. ..
So the question is: when John counting to number n, which is the corresponding finger?

Task
Complete function whichFinger() that accepts an argument n

You need to return a string between the name of five fingers:

"Thumb", "Index finger", "Middle finger", 
"Ring finger", "Little finger"
Examples
whichFinger(10) === "Index finger"
whichFinger(20) === "Ring finger"
whichFinger(30) === "Ring finger"
whichFinger(50) === "Index finger"
whichFinger(100) === "Ring finger"
whichFinger(1000) === "Index finger"
whichFinger(10000) === "Index finger"
*/
function whichFinger(n){
  let hand = ['Thumb','Index finger','Middle finger','Ring finger','Little finger']
  while (n > 5) {
    n -= 4;
    hand = hand.reverse();
  }
  return hand[n - 1];
}
