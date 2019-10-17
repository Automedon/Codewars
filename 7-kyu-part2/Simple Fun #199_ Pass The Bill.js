/*
Description:
Story&Task
There are three parties in parliament. The "Conservative Party", the "Reformist Party", and a group of independants.

You are a member of the “Conservative Party” and you party is trying to pass a bill. The “Reformist Party” is trying to block it.

In order for a bill to pass, it must have a majority vote, meaning that more than half of all members must approve of a bill before it is passed . The "Conservatives" and "Reformists" always vote the same as other members of thier parties, meaning that all the members of each party will all vote yes, or all vote no .

However, independants vote individually, and the independant vote is often the determining factor as to whether a bill gets passed or not.

Your task is to find the minimum number of independents that have to vote for your party's (the Conservative Party's) bill so that it is passed .

In each test case the makeup of the Parliament will be different . In some cases your party may make up the majority of parliament, and in others it may make up the minority. If your party is the majority, you may find that you do not neeed any independants to vote in favor of your bill in order for it to pass . If your party is the minority, it may be possible that there are not enough independants for your bill to be passed . If it is impossible for your bill to pass, return -1.

Input/Output
[input] integer totalMembers

The total number of members.

[input] integer conservativePartyMembers

The number of members in the Conservative Party.

[input] integer reformistPartyMembers

The number of members in the Reformist Party.

[output] an integer

The minimum number of independent members that have to vote as you wish so that the bill is passed, or -1 if you can't pass it anyway.

Example
For n = 8, m = 3 and k = 3, the output should be 2.

It means:

 Conservative Party member --> 3
 Reformist Party member   --> 3
 the independent members --> 8 - 3 - 3 = 2
 If 2 independent members change their minds
 3 + 2 > 3
 the bill will be passed.
 If 1 independent members change their minds
 perhaps the bill will be failed
 (If the other independent members is against the bill).
 3 + 1 <= 3 + 1
For n = 13, m = 4 and k = 7, the output should be -1.

 Even if all 2 independent members support the bill
 there are still not enough votes to pass the bill
 4 + 2 < 7
 So the output is -1
*/
function passTheBill(n, m, k) {
  if (k >= n / 2) {
    return -1;
  }
  return m > n / 2 ? 0 : Math.floor(n / 2) + 1 - m;
}
