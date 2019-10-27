/*
Description:
Welcome. Welcome all to my very second Kata. As you know, the first one was a huge success. This time, however, things are going to be a little bit different. Is it going to be as cool as the last one? Let's find out! Tell your friends! 

Given an integer b greater than 0, create and return a b X b matrix with the following pattern:

                     [x,1]
matrixSquareUp(2) => [2,1]

                     [x,x,1]
                     [x,2,1]
matrixSquareUp(3) => [3,2,1]

                     [x,x,x,1]
                     [x,x,2,1]
                     [x,3,2,1]
matrixSquareUp(4) => [4,3,2,1]
Those are lowercase 'x'.

50 > b > 0
*/
const matrixSquareUp = b => {
  let arr = [];
  let tempArr = [];
  for (let i = 1; i <= b; i++) {
    tempArr = [];
    for (let j = b; j > 0; j--) {
      if (j > i) tempArr.push("x");
      else tempArr.push(j + "");
    }
    arr.push(tempArr);
  }
  return arr;
};
