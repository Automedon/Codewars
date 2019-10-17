/*
Description:
Given n>0 from one of this lists

Part 1: https://www.codewars.com/kata/5a8655e657c5621d0e000087/train

                                      (From Part 1)
                                   ...5,10,15,20,25...  list 1
                                   ...6,11,16,21,26...  list 2
                                   ...7,12,17,22,27...  list 3
                                   ...8,13,18,23,28...  list 4
                                   ...9,14,19,24,29...  list 5
To make it harder someone merged list 3 with 5 and list 1 in a new List And he called it "MadridList" Not only this, he also merged list 2 with list 4 and called it "BarchaList"

So now we got 2 lists :

MadridList = list 3 + list 5 + list 1

BarchaList = list 2 + list 4

Write a function that return the new list name which contain the given number.

Example :

      n=8  return BarchaList
      n=5  return MadridList
Your code should be less than 42 charcter !
*/
Go=n=>n%5%2==0?'MadridList':'BarchaList'
