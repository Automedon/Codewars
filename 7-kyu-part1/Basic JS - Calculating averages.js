var Calculator = {
 average: function(...args) {
    return args.length==0?0:args.reduce((a,b)=>b+a)/args.length
 }
};
