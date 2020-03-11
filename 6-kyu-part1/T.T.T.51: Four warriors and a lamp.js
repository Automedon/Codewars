/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #51:
Four warriors and a lamp

Story
There are four warriors, they need to go through a dark tunnel. Tunnel is very narrow, every time only can let two warriors through, and there are lot of dangerous traps. Fortunately, they have a lamp that can illuminate the tunnel to avoid being trapped by the trap.

In order to pass this tunnel, they need five steps:

1.Two people go through the tunnel with the lamp

2.And then one people come back with the lamp

3.And then two people go through the tunnel with the lamp

4.And then one people come back with the lamp

5.And then two people go through the tunnel with the lamp

Each warrior has his own walking speed, we need to calculate the shortest time they have to cross the tunnel.

For example:

Four warriors is a,b,c,d. Their speed are [3,4,5,6]. It means they need 3 minutes, 4 minutes, 5 minutes and 6 minutes to cross the tunnel. The shortest crossing time should be 21 minutes, the method is as follows:

 a and b go through the tunnel  ---> Spend 4 minutes
 (Time spent should be calculated by the person who is slow)
 a come back                    ---> Spend 3 minutes
 a and c go through the tunnel  ---> Spend 5 minutes
 a come back                    ---> Spend 3 minutes
 a and d go through the tunnel  ---> Spend 6 minutes
Do you have any other better way?

Task
Complete function shortestTime() that accepts 1 argument: speed that are the spent time of four warriors. Returns the shortest time that all warriors go through the tunnel.

###Note: The method in example above is not always the best way.

Example
shortestTime([3,4,5,6])  === 21

shortestTime([3,7,10,18])  === 41

shortestTime([5,5,6,7])  === 27

shortestTime([5,6,30,40])  === 63
*/
function shortestTime(speed){
  return speed.sort((a,b)=>a-b)[0] + speed[1] + speed[3] + Math.min(2 * speed[1], speed[0] + speed[2]);
}
