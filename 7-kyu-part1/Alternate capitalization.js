/*
function capitalize(s){
  return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
          s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
};
*/

function capitalize(s) {
  return [
    s
      .split("")
      .map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()))
      .join(""),
    s
      .split("")
      .map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()))
      .join("")
  ];
}
