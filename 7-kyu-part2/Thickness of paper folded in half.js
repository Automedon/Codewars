/*
Description:
I first started to think about this issue when I saw a MythBusters TV program where they managed to fold a paper in half 11 times. Current record is 12 times.
But if we could have an infinite piece of paper and could fold it any time we want, what would be the thickness of all the layers?
Let's check it out!

Your task is to write a function which gets 2 arguments: "thickness" in millimeters of 1 sheet of paper and "n" - number of folding times.
Functions should return total thickness of all layers of paper when you fold it n times.
If answer is less than 1 meter return it in millimeters, if it is less than kilometer return it in meters, or in km.

0 < answer < 1'000 ---> answer + mm 
1'000 ≤ answer < 1'000'000 ---> answer + m 
answer ≥ 1'000'000 ---> answer + km 
The answer should be formatted to correct units and then rounded exactly to 2 decimal places. Example: "1.00 mm", "2.00 m", "1.00 km"

If thickness of 1 sheet of paper a = 0.09 (mm)
we are folding it in half b = 3 (times):

1st time = 0.09 + 0.09 = 0.18 mm 
2nd time = 0.18 + 0.18 = 0.36 mm 
3rd time = 0.36 + 0.36 = 0.72 mm 
so the result should be "0.72 mm" 

It is hard to believe but the thickness of paper folded in half 70 times will be more than 11 light year ))

Good luck!
*/
const paperThickness = (paper, n) => {
   let answ = paper
   for(let i=0;i<n;i++){
   answ+=answ;
   answ=answ.toFixed(2)*1
   }
   if (answ>1000000){ return  `${(answ/1000000).toFixed(2)} km`
   }
   if (answ>1000){ return  `${(answ/1000).toFixed(2)} m`
   }
   return `${answ.toFixed(2)} mm`
}
