function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}
