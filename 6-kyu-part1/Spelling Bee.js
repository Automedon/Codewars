/*
Description:
How many bees are in the beehive?
bees can be facing UP, DOWN, LEFT, or RIGHT
bees can share parts of other bees
Examples
Ex1

bee.bee     
.e..e..
.b..eeb
Answer: 5

Ex2 ``` bee.bee e.e.e.e eeb.eeb ``` *Answer: 8*
Notes
The hive may be empty or null/None/nil/...
Python: the hive is passed as a list of lists (not a list of strings)
*/
howManyBees = function(hive) {
  if (hive===null) return 0
  if (!hive.length) return 0
  let count = 0
  for (let i=0;i<hive.length;i++){
    for (let j=0;j<hive[0].length-2;j++){
      if (hive[i][j]==='b'&&hive[i][j+1]==='e'&&hive[i][j+2]==='e')count++
      if (hive[i][j]==='e'&&hive[i][j+1]==='e'&&hive[i][j+2]==='b')count++ 
    }
  }
  for (let i=0;i<hive[0].length;i++){
    for (let j=0;j<hive.length-2;j++){
      if (hive[j][i]==='b'&&hive[j+1][i]==='e'&&hive[j+2][i]==='e')count++
      if (hive[j][i]==='e'&&hive[j+1][i]==='e'&&hive[j+2][i]==='b')count++
       
    }
  }
  return count
}
