/*
Description:
In this kata we have to create a function that will give us some specific information of a data base. We have a sequence of postive integers that is registered by OEIS with the code A001055. (https://oeis.org/A001055). This sequence give us the amount of ways that a number may be expressed as a product of its factors (included the number itself multiplied by one.)

The first terms of this sequence are shown below:

n-th term    a(n)
1             1
2             1
3             1
4             2
5             1
6             2
7             1
8             3
9             2
10            2
11            1
12            4
13            1
14            2
15            2
16            5
17            1
18            4
19            1
20            4
21            2
22            2
23            1
All the prime numbers have the corresponding value 1, because there is only one possible product for a prime number. For example the prime number 37 = 37 . 1

On the other hand the a(12) = 4 That means that has 4 different products that are equal to it. See them below:

12 = 12 . 1 = 2 . 6 = 3 . 4 = 2 . 2 . 3
       (1)     (2)     (3)       (4)
We may say that 12 has four different multiplicative partitions. The sequence a(n) is very irregular as we can see in its graph below:

source: imgur.com

In the preloaded section you are given a dictionary (hash (Ruby), object (Javascript) named A001055 (In Python and Javascript) and $a001055(In Ruby). Its values go up to n = 1006 included.

You have to create the function inf_database() (Ruby and Python) infDatabase() (Javascript) that receives three arguments.

inf_database((1), (2), (3))

(1) - an array ```[a, b]```, that represents the numbers in the range ```[a, b]``` to be considered, ```a``` and ```b``` included.

(2) - A string with five possible values: - "higher than"
                                          - "lower than"
                                          - "equals to"
                                          - "higher and equals to"
                                          - "lower and equals to" 

(3) - The value, ```val```, of the dictionary A001055.
The function will output, the amount of numbers that fulfill our conditions and a sorted list of these numbers.

Let's see some cases:

1) We want to know about the numbers between 10 and 21 (included) that have more than one multiplicative partition

range_ = [10, 21]
str_ = "higher than"
val = 1
inf_database(range_, str_, val) == (9, [10, 12, 14, 15, 16, 18, 20, 21, 22])
We want to know the numbers between 25 and 75 that have more than or equals to 5 multiplicative partitions.

range_ = [25, 75]
str_ = ""higher and equals to"
val = 5
inf_database(range_, str_, 5) == (13, [30, 32, 36, 40, 42, 48, 54, 56, 60, 64, 66, 70, 72])
If the string command is wrong the function inf_database() will output "wrong constraint"

range_ = [25, 75]
str_ = "higer and equal to"
val = 5
inf_database(range_, str_, 5) == "wrong constraint"
Enjoy it!! (A001055 is a dictionary of the form {n1:val1, n2: val2, ....., nk: valk} and n <= 1006)
*/
function infDatabase(r, s, val){
    let arr = [];
    if (s==='higher than'){
      for (let i in A001055){
        if (i*1>=r[0]&&i*1<=r[1]){
          if (A001055[i]>val){
            arr.push(i*1)
          }
        }
      }
    return [arr.length,arr];
    }
    if (s==='higher and equals to'){
      for (let i in A001055){
        if (i*1>=r[0]&&i*1<=r[1]){
          if (A001055[i]>=val){
            arr.push(i*1)
          }
        }
      }
    return [arr.length,arr];
    }
    if (s==='lower and equals to'){
      for (let i in A001055){
        if (i*1>=r[0]&&i*1<=r[1]){
          if (A001055[i]<=val){
            arr.push(i*1)
          }
        }
      }
    return [arr.length,arr];
    }
    if (s==='lower than'){
      for (let i in A001055){
        if (i*1>=r[0]&&i*1<=r[1]){
          if (A001055[i]<val){
            arr.push(i*1)
          }
        }
      }
    return [arr.length,arr];
    }
    if (s==='equals to'){
      for (let i in A001055){
        if (i*1>=r[0]&&i*1<=r[1]){
          if (A001055[i]===val){
            arr.push(i*1)
          }
        }
      }
    return [arr.length,arr];
    }
    return "wrong constraint"
}
