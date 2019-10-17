/*
Description:
Introduction
 	Fish are an integral part of any ecosystem. Unfortunately, fish are often seen as high maintenance. Contrary to popular belief, fish actually reduce pond maintenance as they graze on string algae and bottom feed from the pond floor. They also make very enjoyable pets, providing hours of natural entertainment.
 
Driving
Task
 	In this Kata you are fish in a pond that needs to survive by eating other fish. You can only eat fish that are the same size or smaller than yourself. You must create a function called fish that takes a shoal of fish as an input string. From this you must work out how many fish you can eat and ultimately the size you will grow to.
Rules
 	1.  Your size starts at 1
2.  The shoal string will contain fish integers between 0-9
3.  0 = algae and wont help you feed.
4.  The fish integer represents the size of the fish (1-9).
5.  You can only eat fish the same size or less than yourself.
6.  You can eat the fish in any order you choose to maximize your size.
7   You can and only eat each fish once.
8.  The bigger fish you eat, the faster you grow. A size 2 fish equals two size 1 fish, size 3 fish equals three size 1 fish, and so on.
9.  Your size increments by one each time you reach the amounts below.
Increase your size
Your size will increase depending how many fish you eat and on the size of the fish. This chart shows the amount of size 1 fish you have to eat in order to increase your size.

Current size
Amount extra needed for next size
Total size 1 fish
Increase to size
1
4
4
2
2
8
12
3
3
12
24
4
4
16
40
5
5
20
60
6
6
24
84
7
 
etc...

Returns
 	Return an integer of the maximum size you could be.
Example 1
shoal = "11112222"

=> 4 fish of size 1
=> 4 fish of size 2
You eat the 4 fish of size 1 (4 * 1 = 4) which increases your size to 2
Now that you are size 2 you can eat the fish that are sized 1 or 2.
You then eat the 4 fish of size 2 (4 * 2 = 8) which increases your size to 3
fish("11112222") => 3
Example 2
shoal = "111111111111"

=> 12 fish of size 1
You eat the 4 fish of size 1 (4 * 1 = 4) which increases your size to 2
You then eat the remainding 8 fish of size 1 (8 * 1 = 8) which increases your size to 3
fish("111111111111") => 3
Good luck and enjoy!
*/
function fish(shoal){
  let amount=0;
  let size=1
  let nextSize=4;
  shoal=shoal.split``.sort().join``
  for (let i=0;i<shoal.length;i++){
    if (shoal[i]<=size){amount+=shoal[i]*1}
    if (amount>=nextSize){
      amount-=size*4
      size++
      nextSize=size*4
    }
  }
  return size
}
