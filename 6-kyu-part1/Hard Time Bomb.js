/*
Description:
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
*/
for (var name in this) {
  if (typeof this[name] === "number") {
    Bomb.CutTheWire(this[name]);
  }
}
