/*
Description:
Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D' and ensure that each row contain at least one occurance of each letter. Example: [ ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'], ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'], ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'], ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'], ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'], ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'], ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ]
*/
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function array10(){
  let arr = [];
  let dict = ['A','B','C','D'];
  let tempArr=[];
  for (let i=0;i<10;i++)
  { tempArr=[];
    for (let j=0;j<10;j++)
    {

      tempArr.push(dict[getRandomArbitrary(0,4)])
      
    } if (!tempArr.includes('A')||!tempArr.includes('B')||!tempArr.includes('C')||!tempArr.includes('D'))
    {
    i--
    } else {
    arr.push(tempArr)
    }
  }

  return arr 
}
