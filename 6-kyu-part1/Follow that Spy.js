/*
Description:
We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go in correct order based on his itineraries.

Example:
routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]

result: "USA, BRA, UAE, JPN, PHL"

note: It is safe to assume that there will be no repeating place with different route and there are no empty routes and could have at least one (1) route (from one waypoint to another).
*/
function findRoutes(routes) {
  let str = [].concat(...routes.map(v=>v))
  str=str.filter(v=>str.indexOf(v)===str.lastIndexOf(v))
  let index = 0
  for (let i=0;i<str.length;i++){
    for (let j=0;j<routes.length;j++){
      if (routes[j][0]===str[i]){
        index=j
        break
      }
    }
  }
  let arr = routes.splice(index,1)
  for (let i=0;i<routes.length;i++){
    for (let j=0;j<routes.length;j++){
      if (arr[i][1]===routes[j][0]){
        arr.push(routes[j])
        break
      }
    }
  }
   return [...new Set([].concat(...arr))].join`, `
}
