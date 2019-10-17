/*
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #27:
Four piles of apples

Problem
There are n apples that need to be divided into four piles. We need two mysterious number x and y. Let The number of first pile equals to x+y, the number of second pile equals to x-y, the number of third pile equals to x*y, the number of fourth pile equals to x/y. We need to calculate how many apples are there in each pile.

Of course, there won't be so many unknowns. We know the total number of apples(n) and the second mysterious number(y).

For example: there are 48 apples need to divided into four piles. y=3. that is, 1st pile should be x+3, 2nd pile should be x-3, 3rd pile should be x*3, 4th pile should be x/3. Do you know how much x is? x should be 9, because:

(9 + 3) + (9 - 3) + (9 * 3) + (9 / 3) = 12 + 6 + 27 + 3 = 48
So, 48 apples should be divided into 12, 6, 27, 3.

Task
Complete function fourPiles()/four_piles() that accepts two arguments n and y, return an array contains the number of for piles. Each element in the result array should be a positive integer. If can not divide, please return [].

Examples
fourPiles 48 3 -- [12,6,27,3]  
//The elements are arranged in sequence according to:
//   x+y,x-y,x*y,x/y

fourPiles 100 4 -- [20,12,64,4]  
-- Verify correctness:
-- x=16,y=4
(16+4) + (16-4) + (16*4) + (16/4) -- 100

-- Edge case:
fourPiles 25 4  -- []  -- [8,0,16,1] is not a correct answer

fourPiles 24 4  -- []  -- can not divide
*/
function fourPiles(n,y){
 for (let i=0;i<1000;i++){
 if ((i-y)+(i+y)+(i*y)+(i/y)===n&&[(i+y),(i-y),(i*y),(i/y)].every(v=>v>0)) return [(i+y),(i-y),(i*y),(i/y)]
   }
  return []
}
