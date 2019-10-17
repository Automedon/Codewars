/*
Description:
Create a function that takes in the sum and age difference of two people, calculates their individual ages and returns the result as an array of the following format: [olderAge, youngerAge]. Return null if:

sum < 0
difference < 0
either of the calculated ages come out to be negative
*/
function getAges(sum,difference){
   if (difference<0||sum<0) return null;
   sum=sum/2
   difference/=2
   if (sum+difference<0||sum-difference<0) return null;
   return [sum+difference,sum-difference]
};
