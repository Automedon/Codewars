/*
Description:
Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/


const findSquares = num => {
  let squares = []
  let i = 1;
  while(i<1000000){
    squares.push(i*i)
    i++
  }

  for (let i=0;i<squares.length-1;i++){
      if(Math.abs(squares[i+1]-squares[i])===num){
        return `${squares[i+1]}-${squares[i]}`
    }
  }
    return 1
};
