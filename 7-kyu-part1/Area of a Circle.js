var circleArea = function(radius) {
  if (radius<=0||typeof radius !== 'number') return false;
  return +((Math.PI*radius*radius).toFixed(2))
};
