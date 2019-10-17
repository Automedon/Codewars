var handOutGift = (function() {
  var list = [];
  return function(name) {
    if(list.includes(name))throw new 'You\'ve already got a gift';
    else list.push(name);
  }
})();
