/*
Description:
It's almost the New Year, so time to make that New Year's Resolution! You and your friends have been talking about taking classes at the gym. Bikram Yoga was a bit too intense, so you want to cool things out by taking a regular yoga class. That Zumba class also seemed pretty exciting! You all agree 2 gym courses for the year will suffice and excitedly head over to the local gym.

None of you have gym memberships yet, but currently there is a good promotion going on for free classes with a monthly gym commitment. Check out their rates with the schedule below and figure out the total cost for each tier of membership.

months      rate ($)      # of free classes 
1            40            2
3            35            7
6            25            11
9            22            15
12           20            20
Currently, all gym courses on offer are $15 a class, twice a week, for 6 weeks. Without any discounts, that would make the grand total of $360 for the 2 full courses.
*/
function compareCosts(c){
  if (c<3) return 370
  if (c<6) return 360
  if (c<9) return 345
  if (c<12) return 333
  return 300
}
