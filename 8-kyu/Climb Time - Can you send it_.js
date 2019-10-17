/*
Description:
You're a rad climber. Climbing

You have a rope that you know the length of in meters and a guide book that tells you the height of your climb in feet.

If the rope is long enough to complete the climb, you're golden to send a stellar climb (return true).

Remember the rope has to go up AND down to send the climb.

BUT if the rope is too short, you're doomed to die or doom your friends! For the sake of everyone's dog, return false if that's the case.


If the input is not a number, return null because that's just silly.
*/
function canClimb(ropeLength,climbHeight){
  if (typeof ropeLength!=='number'||typeof climbHeight!=='number') return null
  return ropeLength/2>=climbHeight/3.2808
}
