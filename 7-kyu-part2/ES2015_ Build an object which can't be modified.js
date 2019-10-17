/*
Description:
Declare an variable which name is stone that cant't be modified.

The initial value of stone is under below.

{
  feature: 'earth',
  style: {
    color: 'black'
  }
}

*/
const stone = {
  feature: "earth",
  style: {
    color: "black"
  }
};
Object.freeze(stone);
Object.freeze(stone.style);
