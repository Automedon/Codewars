/*
Description:
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/
function equalize(array) {
  return array.map(v =>
    v - array[0] < 0 ? `${v - array[0]}` : `+${v - array[0]}`
  );
}
