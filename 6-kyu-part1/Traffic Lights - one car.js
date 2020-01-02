/*
Description:
See Also

Traffic Lights - one car
Traffic Lights - multiple cars
Overview
A character string represents a city road.

Cars travel on the road obeying the traffic lights..

Legend:

. = Road
C = Car
G = GREEN traffic light
O = ORANGE traffic light
R = RED traffic light
Something like this:

C...R............G......
Rules
Simulation
At each iteration:

the lights change, according to the traffic light rules... then
the car moves, obeying the car rules
Traffic Light Rules
Traffic lights change colour as follows:

GREEN for 5 time units... then
ORANGE for 1 time unit... then
RED for 5 time units....
... and repeat the cycle
Car Rules
Cars travel left to right on the road, moving 1 character position per time unit
Cars can move freely until they come to a traffic light. Then:
if the light is GREEN they can move forward (temporarily occupying the same cell as the light)
if the light is ORANGE then they must stop (if they have already entered the intersection they can continue through)
if the light is RED the car must stop until the light turns GREEN again
Kata Task
Given the initial state of the road, return the states for all iterations of the simiulation.

Input
road = the road array
n = how many time units to simulate (n >= 0)
Output
An array containing the road states at every iteration (including the initial state)
Note: If a car occupies the same position as a traffic light then show only the car
Notes
There is only one car
For the initial road state
the car is always at the first character position
traffic lights are either GREEN or RED, and are at the beginning of their countdown cycles
There are no reaction delays - when the lights change the car drivers will react immediately!
If the car goes off the end of the road it just disappears from view
There will always be some road between adjacent traffic lights
Example
Run simulation for 10 time units

Input

road = "C...R............G......"
n = 10
Result

[
  "C...R............G......", // 0 initial state as passed
  ".C..R............G......", // 1
  "..C.R............G......", // 2
  "...CR............G......", // 3
  "...CR............G......", // 4
  "....C............O......", // 5 show the car, not the light
  "....GC...........R......", // 6
  "....G.C..........R......", // 7
  "....G..C.........R......", // 8
  "....G...C........R......", // 9
  "....O....C.......R......"  // 10
]
Good luck!

DM
*/
function trafficLights(road, n) {
  let c = road.indexOf('C')
  const state = [road]
  let r = road.split``.map(v=>v==='G'?{'G':1}:v==='R'?{'R':1}:v==='O'?{'O':1}:'.')
  for (let j=0;j<n;j++){
    r=r.slice().map((v,i,arr)=>{
      if (v[`G`]){
        if (v[`G`]==5) return {O:1}
        return {G:v[`G`]+=1}
      }
      else if (v[`O`]){
        return {R:1}
      }
      else if (v[`R`]){
        if (v[`R`]==5) return {G:1}
        return {R:v[`R`]+=1}
      }
      return v
    })
    if (typeof r[c+1]!=='object'||!r[c+1][`R`]&&!r[c+1][`O`]){
      c++
    }
    if (c<road.length){
      let saved = r[c]
      r[c]='C'
      state.push(r.map(v=>v['G']?'G':v['R']?'R':v['O']?'O':v).join``)
      r[c]=saved
      }
    else {
      state.push(r.map(v=>v['G']?'G':v['R']?'R':v['O']?'O':v).join``)
    }
  }
  return state
}
