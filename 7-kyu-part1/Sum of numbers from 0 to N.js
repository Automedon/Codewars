var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let arr=[];
    for(let i=0;i<=count;i++) {arr.push(i)};
    let b=arr.reduce((total,next)=>total+next,0)
    let a=arr.join('+');
    if(count<0) return `${count}<0`;
    if(count==0) return `${count}=0`;
    return `${a} = ${b}`
  };

  return SequenceSum;

})();
