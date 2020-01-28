/*
Description:
⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

🗺️ You would be given a map of the world in a type of string:

s = "01000000X000X011X0X"

"0" : uninfected

"1" : infected

"X" : ocean
⚫ The virus can't spread in the other side of the ocean.

⚫ If one person is infected every person in this continent gets infected too.

⚫ Your task is to find the percentage of human population that got infected in the end.

☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!

💡 Example:

 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.
*/
function infected(s) {
  let count = 0
  let count2 = 0
  let arr = s.split`X`.map(v=>{
    if (v.includes(1)){
      count+=v.length
      return v.replace(/0/g,1)
    }
    count2+=v.length
    return v
  })
  if (count===0) return 0
  return (count/(count2+count))*100
}
