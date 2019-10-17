function capitalize(s,arr){
  return s.split('').map((val, i)=>(arr.includes(i)) ? val.toUpperCase() : val).join('');
};
