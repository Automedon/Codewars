/*
Description:
On a map, we are given two points, Work and Home. We need to get home from work in the shortest distance possible. Your wife calls you to pick up some groceries on your way home. You can either go to Store "A" or Store "B" to pick up what you need. Calculate the distance of the shortest path (i.e. either Work-Store A-Home or Work-Store B-Home).
*/
function shortestPath([x, y], [x1, y1], [x2, y2], [x3, y3]) {
  let WA = Math.hypot(x - x2, y - y2);
  let WB = Math.hypot(x - x3, y - y3);
  let AH = Math.hypot(x2 - x1, y2 - y1);
  let BH = Math.hypot(x3 - x1, y3 - y1);
  return Math.min(WA + AH, WB + BH);
}
