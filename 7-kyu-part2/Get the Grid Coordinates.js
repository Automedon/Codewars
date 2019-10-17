/*
Description:
Grid Coordinates
Imagine you have a grid with numbers for each item in the grid. The top row and first column are the headers for X and Y coordinates.

1	2	3	4	5
1	1	2	3	4	5
2	6	7	8	9	10
3	11	12	13	14	15
The number 9 for example has an X coordinate of 4 and a Y coordinate of 2.

Your job is to write two functions. One to get the coordinates given the number, and another to get the number given the coordinates.

The two functions have been writen for you, your job is just to fill out the code to make the tests pass.

Here is also another example grid.

1	2	3	4	5	6	7	8	9
1	1	2	3	4	5	6	7	8	9
2	10	11	12	13	14	15	16	17	18
3	19	20	21	22	23	24	25	26	27
4	28	29	30	31	32	33	34	35	36
5	37	38	39	40	41	42	43	44	45
6	46	47	48	49	50	51	52	53	54
7	55	56	57	58	59	60	61	62	63
*/
function getGridNumber(width, height, x, y) {
  let grid=[];
  for (let i=0;i<=height;i++){
    grid.push(Array.from({length:width},(v,z)=>{
    return (z+1)+(width*i)
    }))
  }
  return grid[y-1][x-1];
}

function getXYPosition(width, height, number) {
  let grid=[];
  let obj={x:0,y:0}
  for (let i=0;i<=height;i++){
    grid.push(Array.from({length:width},(v,z)=>{
    return (z+1)+(width*i)
    }))
  }
  grid.map((v,i)=>v.map((z,j)=>{
    if (number===v[j]){
      obj.x=j+1
      obj.y=i+1
    }
  }))
  return obj
}
