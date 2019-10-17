/*
Description:
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/
function sumOfABeach(beach) {
  beach=beach.toLowerCase();
  return beach.match(/sand|water|sun|fish/g)===null?0:beach.match(/sand|water|sun|fish/g).length
}
