/*
Description:
The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

Your function takes three arguments:

The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)
Calculate number of day when the snail will reach the top of the column.
*/
function snail(height, up, down) {
  if (up <= 0 || down < 0 || height <= 0) return false;
  for (let i = up, j = 0; ; i += up - down, j++) {
    if (i >= height) return j + 1;
  }
}
