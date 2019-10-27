/*
Description:
The student needs to get on a train that leaves from the station D kilometres away in T minutes.

She can get a taxi that drives at V1 km/h for the price of R €/km or she can walk at V2 km/h for free.

A correct solution will be a function that returns the minimum price she needs to pay the taxi driver or the string "Won't make it!".

All the inputs will be positive integers, the output has to be a string containing a number with two decimal places - or "Won't make it!" if that is the case.

It won't take her any time to get on the taxi or the train.

In non-trivial cases you need to combine walking and riding the taxi so that she makes it, but pays as little as possible.
*/
function calculateOptimalFare(D, T, V1, R, V2) {
  if ((D * 1) / V2 <= T / 60) return "0.00";
  let taxi = (T / 60 - (D * 1) / V2) / (1 / V1 - 1 / V2);
  if (taxi > D || taxi < 0) return "Won't make it!";
  return taxi;
}
