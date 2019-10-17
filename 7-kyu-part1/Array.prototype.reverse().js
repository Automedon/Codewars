Array.prototype.reverse = function() {
  var arr = this.splice(0);  
  
  while(arr.length) {
    this.push(arr.pop());
  }   
  
  return this;
};
